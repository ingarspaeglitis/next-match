'use client';

import {NavbarItem} from '@heroui/navbar';
import { Link } from "@heroui/link";
import {usePathname} from 'next/navigation';

type Props = {
    href: string;
    label: string;
}

export default function NavLink({ href, label }: Props) {
    const pathname = usePathname();
    //const unreadCount = useMessageStore(state => state.unreadCount); 

    return (
        <NavbarItem isActive={pathname === href} as={Link} href={href}>
            <span>{label}</span>
        </NavbarItem>
    );
}