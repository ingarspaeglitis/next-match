'use client';


import { Tab, Tabs } from '@heroui/tabs';
import { Key, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Spinner } from "@heroui/spinner";



export default function ListsTab() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const tabs = [
        { id: 'source', label: 'Members I have liked' },
        { id: 'target', label: 'Members that like me' },
        { id: 'mutual', label: 'Mutual likes' },
    ]

    function handleTabChange(key: Key) {
        startTransition(() => {
            const params = new URLSearchParams(searchParams);
            params.set('type', key.toString());
            router.replace(`${pathname}?${params.toString()}`);
        })
    }

    return (
        <div className='flex w-full flex-col mt-10 gap-5 relative'>
            {isPending && <Spinner color='secondary' className="absolute left-120" />}
            <Tabs
                aria-label='Like tabs'
                items={tabs}
                color='secondary'
                onSelectionChange={(key) => handleTabChange(key)}
            >
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <>
                        </>
                    </Tab>
                )}
            </Tabs>
        </div>

    );
}