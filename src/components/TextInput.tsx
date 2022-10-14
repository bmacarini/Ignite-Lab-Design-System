import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInpuntRoot({ children }: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 h-12 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300'>
            {children}
        </div>
    )
}

TextInpuntRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
    <Slot className="w-6 h-6 text-gray-400">
        {props.children}
    </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInpuntRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}