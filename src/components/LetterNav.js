import React, { useState } from "react";
import { Nav, NavItem } from "react-bootstrap";

export default function LetterNav(props) {
  const { setLetterView, setShowByLetter, letterNavKey, setLetterNavKey, setGraphicView } = props.letterNavProps;
  return(
    <Nav className="letterNav" bsStyle="pills" pullLeft activeKey={letterNavKey}>
      <NavItem eventKey={1} onClick={() => {setLetterView("A"); setShowByLetter(true); setLetterNavKey(1);}}>
        A
      </NavItem>
      <NavItem eventKey={2} onClick={() => {setLetterView("B"); setShowByLetter(true); setLetterNavKey(2);}}>
        B
      </NavItem>
      <NavItem eventKey={3} onClick={() => {setLetterView("C"); setShowByLetter(true); setLetterNavKey(3);}}>
        C
      </NavItem>
      <NavItem eventKey={4} onClick={() => {setLetterView("D"); setShowByLetter(true); setLetterNavKey(4);}}>
        D
      </NavItem>
      <NavItem eventKey={5} onClick={() => {setLetterView("E"); setShowByLetter(true); setLetterNavKey(5);}}>
        E
      </NavItem>
      <NavItem eventKey={6} onClick={() => {setLetterView("F"); setShowByLetter(true); setLetterNavKey(6);}}>
        F
      </NavItem>
      <NavItem eventKey={7} onClick={() => {setLetterView("G"); setShowByLetter(true); setLetterNavKey(7);}}>
        G
      </NavItem>
      <NavItem eventKey={8} onClick={() => {setLetterView("H"); setShowByLetter(true); setLetterNavKey(8);}}>
        H
      </NavItem>
      <NavItem eventKey={9} onClick={() => {setLetterView("I"); setShowByLetter(true); setLetterNavKey(9);}}>
        I
      </NavItem>
      <NavItem eventKey={10} onClick={() => {setLetterView("J"); setShowByLetter(true); setLetterNavKey(10);}}>
        J
      </NavItem>
      <NavItem eventKey={11} onClick={() => {setLetterView("K"); setShowByLetter(true); setLetterNavKey(11);}}>
        K
      </NavItem>
      <NavItem eventKey={12} onClick={() => {setLetterView("L"); setShowByLetter(true); setLetterNavKey(12);}}>
        L
      </NavItem>
      <NavItem eventKey={13} onClick={() => {setLetterView("M"); setShowByLetter(true); setLetterNavKey(13);}}>
        M
      </NavItem>
      <NavItem eventKey={14} onClick={() => {setLetterView("N"); setShowByLetter(true); setLetterNavKey(14);}}>
        N
      </NavItem>
      <NavItem eventKey={15} onClick={() => {setLetterView("O"); setShowByLetter(true); setLetterNavKey(15);}}>
        O
      </NavItem>
      <NavItem eventKey={16} onClick={() => {setLetterView("P"); setShowByLetter(true); setLetterNavKey(16);}}>
        P
      </NavItem>
      <NavItem eventKey={17} onClick={() => {setLetterView("Q"); setShowByLetter(true); setLetterNavKey(17);}}>
        Q
      </NavItem>
      <NavItem eventKey={18} onClick={() => {setLetterView("R"); setShowByLetter(true); setLetterNavKey(18);}}>
        R
      </NavItem>
      <NavItem eventKey={19} onClick={() => {setLetterView("S"); setShowByLetter(true); setLetterNavKey(19);}}>
        S
      </NavItem>
      <NavItem eventKey={20} onClick={() => {setLetterView("T"); setShowByLetter(true); setLetterNavKey(20);}}>
        T
      </NavItem>
      <NavItem eventKey={21} onClick={() => {setLetterView("U"); setShowByLetter(true); setLetterNavKey(21);}}>
        U
      </NavItem>
      <NavItem eventKey={22} onClick={() => {setLetterView("V"); setShowByLetter(true); setLetterNavKey(22);}}>
        V
      </NavItem>
      <NavItem eventKey={23} onClick={() => {setLetterView("W"); setShowByLetter(true); setLetterNavKey(23);}}>
        W
      </NavItem>
      <NavItem eventKey={24} onClick={() => {setLetterView("X"); setShowByLetter(true); setLetterNavKey(24);}}>
        X
      </NavItem>
      <NavItem eventKey={25} onClick={() => {setLetterView("Y"); setShowByLetter(true); setLetterNavKey(25);}}>
        Y
      </NavItem>
      <NavItem eventKey={26} onClick={() => {setLetterView("Z"); setShowByLetter(true); setLetterNavKey(26);}}>
        Z
      </NavItem>
    </Nav>
  )
}