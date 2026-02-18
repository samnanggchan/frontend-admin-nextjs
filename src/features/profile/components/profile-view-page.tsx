import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfileViewPage() {
  const mockUser = {
    fullName: 'John Doe',
    emailAddresses: [{ emailAddress: 'john@example.com' }],
    phoneNumbers: [{ phoneNumber: '+1234567890' }]
  };

  return (
    <div className='flex w-full flex-col p-4 space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>Manage your account information</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <label className='text-sm font-medium'>Full Name</label>
            <p className='text-sm text-muted-foreground mt-1'>{mockUser.fullName}</p>
          </div>
          <div>
            <label className='text-sm font-medium'>Email</label>
            <p className='text-sm text-muted-foreground mt-1'>{mockUser.emailAddresses[0].emailAddress}</p>
          </div>
          <div>
            <label className='text-sm font-medium'>Phone</label>
            <p className='text-sm text-muted-foreground mt-1'>{mockUser.phoneNumbers[0].phoneNumber}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
