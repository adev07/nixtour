'use client'

import { useForm } from "react-hook-form"
import { Building2, Mail, Phone, PlaneLanding, PlaneTakeoff, Users } from 'lucide-react'

import { Button } from "../ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "../ui/form"
import { Input } from "../ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"

export default function TravelForm() {
    const form = useForm({
        defaultValues: {
            title: "",
            fullName: "",
            phone: "",
            email: "",
            from: "",
            to: "",
            companyName: "",
            passengers: "",
            groupType: "",
        },
    })

    function onSubmit(values: any) {
        console.log(values)
    }

    return (
        <Card className="w-full mx-auto">
            <CardHeader>
                <CardTitle>Travel Booking</CardTitle>
                <CardDescription>
                    Fill in the details below to make your travel arrangements.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }: { field: any }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select title" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="mr">Mr.</SelectItem>
                                                <SelectItem value="mrs">Mrs.</SelectItem>
                                                <SelectItem value="ms">Ms.</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }: { field: any }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input className="rounded-[5px]" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }: { field: any }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input className="pl-10 rounded-[5px]" {...field} />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }: { field: any }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input className="pl-10 rounded-[5px]" {...field} />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="from"
                                render={({ field }: { field: any }) => (
                                    <FormItem>
                                        <FormLabel>Flying from</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <PlaneTakeoff className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input className="pl-10 rounded-[5px]" {...field} />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="to"
                                render={({ field }: { field: any }) => (
                                    <FormItem>
                                        <FormLabel>Flying to</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <PlaneLanding className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input className="pl-10 rounded-[5px]" {...field} />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }: { field: any }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input className="pl-10 rounded-[5px]" {...field} />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="passengers"
                                render={({ field }: { field: any }) => (
                                    <FormItem>
                                        <FormLabel>No of Passengers</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Users className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                                <Input className="pl-10 rounded-[5px]" type="number" min="1" {...field} />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="groupType"
                                render={({ field }: { field: any }) => (
                                    <FormItem>
                                        <FormLabel>Group Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select group type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="family">Family</SelectItem>
                                                <SelectItem value="business">Business</SelectItem>
                                                <SelectItem value="tourist">Tourist</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                type="submit"
                                className="w-full md:w-auto px-20 py-5 bg-[#BC1110] hover:bg-[#BC1110]/90 text-white rounded-full transition-all font-semibold text-base"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
