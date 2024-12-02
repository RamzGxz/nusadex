import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarImage, } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { CopyIcon, Wallet, WalletCards, Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users, ChevronDown, } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useState } from "react"

const Dashboard = () => {
    const [open, setOpen] = useState(true)
    const [note, setNote] = useState("")
    return (
        <Tabs defaultValue="Dashboard" className="w-[400px] mt-10">
            <TabsList className="grid w-full grid-cols-2 mb-20">
                <TabsTrigger value="Dashboard" className="data-[state=active]:bg-[#95f121] data-[state=active]:text-[#09090b]">Dashboard</TabsTrigger>
                <TabsTrigger value="Analysis" className="data-[state=active]:bg-[#95f121] data-[state=active]:text-[#09090b]">Analysis</TabsTrigger>
            </TabsList>
            {/* Content 1 */}
            <TabsContent value="Dashboard">
                <div className="flex">
                    <div className="flex items-center gap-5">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        </Avatar>
                        <p>Wallet 01 - Account 01</p>
                        {/* walletAssetContent */}
                        <Select>
                            <SelectTrigger className=" w-[40px] border-0">
                            </SelectTrigger>
                            {/* <ChevronDown /> */}
                            <SelectContent>
                                {/*  */}
                                <SelectGroup className="m-5">
                                    <SelectLabel className="text-gray-400">Currently viewing</SelectLabel>
                                    <div className="flex gap-1 mt-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <Button className="text-base flex flex-col items-start hover:bg-transparent" variant="ghost">Wallet 01 - Account 01
                                                <p className="text-xs text-green-500">Connected</p>
                                            </Button>
                                        </div>
                                    </div>
                                </SelectGroup>
                                <div className="border-b-2 mt-5"></div>
                                {/*  */}
                                <SelectGroup className="m-5">
                                    <SelectLabel className="text-gray-400">Recently connected</SelectLabel>
                                    <div className="flex gap-1 mt-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <Button className="text-base flex flex-col items-start hover:bg-transparent" variant="ghost">Wallet 01 - Account 01
                                                <p className="text-xs text-green-500">Connected</p>
                                            </Button>
                                        </div>
                                    </div>
                                </SelectGroup>
                                <div className="border-b-2 mt-5"></div>
                                {/*  */}
                                <SelectGroup className="m-5">
                                    <div className="flex gap-1 mt-2 items-center">
                                        <Wallet />
                                        <Button variant="ghost" className="hover:bg-transparent">Wallet management</Button>
                                    </div>
                                </SelectGroup>
                                {/*  */}
                                <SelectGroup className="m-5">
                                    <div className="flex items-center gap-1 mt-2">
                                        <WalletCards />
                                        {/* Dialog */}
                                        <Dialog open={open} onOpenChange={setOpen}>
                                            <DialogTrigger asChild className="hover:bg-transparent">
                                                <Button variant="ghost">Add watch-only wallet</Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader className="flex flex-row items-center justify-between">
                                                    <DialogTitle>Watch-only</DialogTitle>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-6 w-6 rounded-md"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                    </Button>
                                                </DialogHeader>
                                                <div className="border-b-2"></div>
                                                <div className="space-y-4 py-4">
                                                    <p className="text-sm text-muted-foreground">
                                                        Simply enter your wallet address or domain name to monitor your assets and transaction history
                                                    </p>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="address">Address</Label>
                                                        <Input
                                                            id="address"
                                                            placeholder="Enter address or ENS domain name"
                                                            className="w-full"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <Label htmlFor="note">Note</Label>
                                                            <span className="text-gray-400">( optional )</span>
                                                        </div>
                                                        <Input
                                                            id="note"
                                                            placeholder="Enter a note to easily identify the address"
                                                            maxLength={25}
                                                            value={note}
                                                            onChange={(e) => setNote(e.target.value)}
                                                        />
                                                        <span className="text-xs text-muted-foreground">
                                                            {note.length}/25
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="border-b-2"></div>
                                                <DialogFooter>
                                                    <Button type="submit">Save changes</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </SelectGroup>
                                {/*  */}
                                <SelectGroup className="m-5">
                                    <div className="flex gap-1 mt-2 items-center">
                                        <Settings />
                                        <Button variant="ghost" className="hover:bg-transparent">Preferences</Button>
                                    </div>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* Menu Addres */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost">
                                    <CopyIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Avatar>
                                            <AvatarImage src="/btc-logo.png" alt="@shadcn" />
                                        </Avatar>
                                        <span>Profile</span>
                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        <span>Billing</span>
                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings />
                                        <span>Settings</span>
                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Keyboard />
                                        <span>Keyboard shortcuts</span>
                                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Users />
                                        <span>Team</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>
                                            <UserPlus />
                                            <span>Invite users</span>
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>
                                                    <Mail />
                                                    <span>Email</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <MessageSquare />
                                                    <span>Message</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    <PlusCircle />
                                                    <span>More...</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem>
                                        <Plus />
                                        <span>New Team</span>
                                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Github />
                                    <span>GitHub</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LifeBuoy />
                                    <span>Support</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem disabled>
                                    <Cloud />
                                    <span>API</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut />
                                    <span>Log out</span>
                                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </TabsContent>
            {/* Content 2 */}
            <TabsContent value="Analysis">
                <Card>
                    <CardHeader>
                        <CardTitle>Analysis</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default Dashboard