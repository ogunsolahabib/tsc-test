'use client';

import { useFormStatus } from 'react-dom'
import Button from '../shared/Button';


export default function LoginButton() {
    const { pending } = useFormStatus();
    console.log(pending, 'pending');
    return <Button type="submit" className="block mx-auto mt-10" variant="primary" loading={pending}>{'Login'}</Button>
}