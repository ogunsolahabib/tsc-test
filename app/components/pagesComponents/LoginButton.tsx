'use client';

import { useFormStatus } from 'react-dom'
import Button from '../shared/Button';


export default function LoginButton() {
    const { pending } = useFormStatus();

    return <Button type="submit" className="block w-full mx-auto !mt-10" variant="primary" loading={pending}>Login</Button>
}