import { Component, FunctionalComponent,  } from 'preact';
import { JSXInternal } from 'preact/src/jsx';


type ButtonProps =  JSXInternal.IntrinsicElements['button'];

export const Button: FunctionalComponent<ButtonProps> = ({ children, onClick }) => {

  return (<button onClick={onClick}>{ children }</button>)
}