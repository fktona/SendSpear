import { type } from "os";
import { Dispatch, ReactNode } from "react";

export interface NavLinkProps {
    href: string;
    children: string;
}

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    changeStyle?: boolean;
    label?: string;
    required?: boolean;
    readonly?: boolean;

     
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    presentStyle?: boolean;
    loading?: boolean;
    variant?: "contained" | "outlined" | undefined;
    loadingIndicator?: string | undefined;
    loadingPosition?: "start" | "end" | undefined;
    endIcon?: ReactNode;
    
    startIcon?: ReactNode ;

    size?: "small" | "medium" | "large" | undefined;
}

export interface ModalProps {
    children: ReactNode;
    open: boolean;
    handleClose: any |  void;
    size: string;
}

export interface ModalState {
    open: boolean;
    dispatch:Dispatch<any | void>;
}

export interface userProfile {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    confirmPassword: string;
}

export type LoginProps = Pick<userProfile , 'email' | 'password'>;

export interface SwitchAuthProps {
    handleSwitchAuth: () => void;
  }