import React, { useRef, useState, Fragment, Component } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { s3Upload } from "../libs/awsLib";
import Dropzone from 'react-dropzone';
import config from "../config";
import "./NewProduct.css";



export default class NewProduct extends Component() {
  constructor() {
    super();
    this.state = {
      imgLinkLocation: "https://wanda-quilts.s3-us-west-2.amazonaws.com/product/",
      files: [],
      imgName: "",
      imgType: "",
      price: new Number(),
      imgHeight: "auto",
      imgWidth: "40%",
      imgUrl: "",
      isLoading: false,
      previewStyle: {
        display: 'inline',
        width: 100,
        height: 100
      }
    }
    this.validateForm = this.validateForm.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }
  // const file = useRef(null);
  // const [files, setFiles] = useState("");
  // const [imgName, setImgName] = useState("");
  // const [imgType, setImgType] = useState("");
  // const [price, setPrice] = useState("");
  // const imgHeight = "auto";
  // const imgWidth = "40%";
  // const [imgUrl, setImgUrl] = useState("");
  // const [isLoading, setIsLoading] = useState(false);



  validateForm () {
    const { imgName, imgType, price } = this.state;
    return imgName.length > 0 &&
      imgType.length > 0 &&
      price.length > 0;
  }

  handleFileChange (event) {
    this.setState({files: event.target.files});
    // setImgName(file.current.name.split(".")[0]);
    // setImgType(file.current.name.substr(0,2));
    // setImgUrl(imgLinkLocation + file.current.name);
    console.log(this.state.files);
  }

  async handleSubmit (event) {
    event.preventDefault();
    const { imgType, imgName, price, imgHeight, imgWidth, imgUrl } = this.state;


    // if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
    //   alert(
    //     `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
    //       1000000} MB.`
    //   );
    //   return;
    // }

    this.setState({isLoading: true});

    try {
      // await s3Upload(files.current);

      await this.createProduct({ imgName, imgType, price, imgHeight, imgWidth, imgUrl });
      // props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({isLoading: false});
    }
  }

  createProduct (product) {
    return API.post("products", "/products", {
      body: product
    });
  }
  render() {
    const { imgType, imgName, price, files, previewStyle, isLoading } = this.state;
    return (
      <div className="NewProduct">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="content">
            <h4>{imgName}</h4>
            <h4>{imgType}</h4>
            <ControlLabel>Price</ControlLabel>
            <FormControl
              value={price}
              type="text"
              onChange={e => price(e.target.value)}
            />
          </FormGroup>
          <Dropzone
            accept="image/*"
            onDrop={this.handleFileChange}
          >
            Drop an image and watch the rest take care of itself :)
          </Dropzone>
          {files.length > 0 &&
            <Fragment>
              <h3>Previews</h3>
              {files.map((file) => (
                <img
                  alt="Preview"
                  key={file.preview}
                  src={file.preview}
                  style={previewStyle}
                />
              ))}
            </Fragment>
          }
          <LoaderButton
            block
            type="submit"
            bsSize="large"
            bsStyle="primary"
            isLoading={isLoading}
            disabled={!this.validateForm()}
          >
            Create
          </LoaderButton>
        </form>
      </div>
    );
  };
};
