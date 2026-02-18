'use client';

import { Check, ChevronsUpDown, GalleryVerticalEnd, Plus } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';

// Mock data for organizations
const MOCK_ORGANIZATIONS = [
  { id: '1', name: 'Main Workspace', imageUrl: null, hasImage: false, role: 'admin' },
  { id: '2', name: 'Secondary Workspace', imageUrl: null, hasImage: false, role: 'member' }
];

export function OrgSwitcher() {
  const { isMobile, state } = useSidebar();
  const router = useRouter();
  const [activeOrgId, setActiveOrgId] = useState('1');
  const [organizations] = useState(MOCK_ORGANIZATIONS);

  // Get the currently active organization
  const activeOrganization = organizations.find((org) => org.id === activeOrgId);

  // Handle organization switch
  const handleOrganizationSwitch = (organizationId: string) => {
    setActiveOrgId(organizationId);
  };

  // Use active organization or first organization as fallback
  const displayOrganization = activeOrganization || organizations[0];

  if (!displayOrganization) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg'>
                {displayOrganization.hasImage &&
                displayOrganization.imageUrl ? (
                  <Image
                    src={displayOrganization.imageUrl}
                    alt={displayOrganization.name}
                    width={32}
                    height={32}
                    className='size-full object-cover'
                  />
                ) : (
                  <GalleryVerticalEnd className='size-4' />
                )}
              </div>
              <div
                className={`grid flex-1 text-left text-sm leading-tight transition-all duration-200 ease-in-out ${
                  state === 'collapsed'
                    ? 'invisible max-w-0 overflow-hidden opacity-0'
                    : 'visible max-w-full opacity-100'
                }`}
              >
                <span className='truncate font-medium'>
                  {displayOrganization.name}
                </span>
                <span className='text-muted-foreground truncate text-xs'>
                  {organizations.find(
                    (org) => org.id === displayOrganization.id
                  )?.role || 'Organization'}
                </span>
              </div>
              <ChevronsUpDown
                className={`ml-auto transition-all duration-200 ease-in-out ${
                  state === 'collapsed'
                    ? 'invisible max-w-0 opacity-0'
                    : 'visible max-w-full opacity-100'
                }`}
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className='text-muted-foreground text-xs'>
              Organizations
            </DropdownMenuLabel>
            {organizations.map((org, index) => {
              const isActive = org.id === activeOrgId;
              return (
                <DropdownMenuItem
                  key={org.id}
                  onClick={() => handleOrganizationSwitch(org.id)}
                  className='gap-2 p-2'
                >
                  <div className='flex size-6 items-center justify-center overflow-hidden rounded-md border'>
                    {org.hasImage && org.imageUrl ? (
                      <Image
                        src={org.imageUrl}
                        alt={org.name}
                        width={24}
                        height={24}
                        className='size-full object-cover'
                      />
                    ) : (
                      <GalleryVerticalEnd className='size-3.5 shrink-0' />
                    )}
                  </div>
                  {org.name}
                  {isActive && <Check className='ml-auto size-4' />}
                  {!isActive && (
                    <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                  )}
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className='gap-2 p-2'
              onClick={() => {
                router.push('/dashboard/workspaces');
              }}
            >
              <div className='flex size-6 items-center justify-center rounded-md border bg-transparent'>
                <Plus className='size-4' />
              </div>
              <div className='text-muted-foreground font-medium'>
                Add organization
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
