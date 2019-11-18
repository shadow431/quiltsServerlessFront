import React, { useRef, useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { Thumbnail, Button } from "react-bootstrap";
import { s3Upload } from "../libs/awsLib";
import S3FileUpload from "react-s3";
import config from "../config";

export default function Products(props) {
  const file = useRef(null);
  const [product, setProduct] = useState(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const configS3FileUpload = {
    bucketName: "wandaquilts",
    dirName: "private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4",
    region: "us-east-2",
    accessKeyId: "AKIAQDVBB57LG7LOIVX7",
    secretAccessKey: process.env.S3
  }

  useEffect(() => {
    function loadProduct() {
      return API.get("quilts", `/products/${props.location.state.props._id}`);
    }

    async function onLoad() {
      try {
        const product = await loadProduct();
        const { content, attachment } = product;

        if (attachment) {
          product.attachmentURL = await Storage.vault.get(attachment);
        }

        setContent(content);
        setProduct(product);
      } catch (e) {
        alert(e);
      }
    }

    onLoad();
  }, [props.match.params.id]);


  // function formatFilename(str) {
  //   return str.replace(/^\w+-/, "");
  // }

  // function handleFileChange(event) {
  //   file.current = event.target.files[0];
  // }

  // function saveProduct(product) {
  //   return API.put("quilts", `/products/${props.match.params.id}`, {
  //     body: product
  //   });
  // }

  // async function handleSubmit(event) {
  //   let attachment;

  //   event.preventDefault();

  //   if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
  //     alert(
  //       `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
  //         1000000} MB.`
  //     );
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     if (file.current) {
  //       attachment = await s3Upload(file.current);
  //     }

  //     await saveProduct({
  //       content,
  //       attachment: attachment || product.attachment
  //     });
  //     props.history.push("/");
  //   } catch (e) {
  //     alert(e);
  //     setIsLoading(false);
  //   }
  // }

  async function handleDelete(event) {
    event.preventDefault();
    const fileUrl = product.imgUrl.split("/")[5];

    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      await S3FileUpload
        .deleteFile(fileUrl, configS3FileUpload)
        .then(response => console.log(response))
        .catch(err => console.error(err))
      await API.del("quilts", `/admin/products/${product._id}`);

      props.history.push("/admin/inventory");
    } catch (e) {
      alert(e);
      setIsDeleting(false);
    }
  }

  return (
    <div className="Products">
      {product && (
        <form onSubmit={handleDelete}>
          <Thumbnail key={product._id} src={product.imgUrl} alt="Well, something went wrong....">
            <h1>{product.imgName}</h1>
            <Button type="submit">Delete</Button>
          </Thumbnail>
        </form>
      )}
    </div>
  );
}
