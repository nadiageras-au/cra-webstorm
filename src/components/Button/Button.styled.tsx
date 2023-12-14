import styled, {css} from "styled-components";
//import {MyAnimation} from "../../styles/animations/Animations";

type ButtonPropsType = {
    //type, options of funct
    title?: string
    onClick:()=>void
    // styles
    color?: string
    fontSize?: string
    btnType?: "primary" | "outlined"
    // primary?: boolean
    // outlined?: boolean
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler=()=>{
        props.onClick();
    }
    return (
        <StyledBtn onClick={onClickHandler}>
            {props.title}
        </StyledBtn>
    )
}
const StyledBtn = styled.button<ButtonPropsType>`
  border: none;
  //background-color: #fb3f78;
  // background-color: #e8f60a;
  padding: 10px 20px;
  margin: 10px;
  //color: #fff;
  font-size: ${props => props.fontSize || "12px"};


  &:hover {
    background-color: #efa2a2;
  }

  ${props => props.btnType === "outlined" && css<ButtonPropsType>`
    //outlined
    border: 2px solid ${props => props.color || "#fb3f78"};
    color: ${props => props.color || "#fb3f78"};
  `}

  ${props => props.btnType === "primary" && css<ButtonPropsType>`
    //primary
    background-color: ${props => props.color || "#fb3f78"};
    color: #fff;
  `}

`
