import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"

export default function FAQSection() {
    return (
        <div className="mx-auto">
            <div className="py-6">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-t">
                        <AccordionTrigger className="text-base font-normal hover:no-underline">
                            Which Website Is Best For Students to Book Air Ticket Bookings?
                        </AccordionTrigger>
                        <AccordionContent>
                            NixTour offers special student airfares with extra luggage allowance and discounts up to 15-20%.
                            Our dedicated service makes us the best choice for student air ticket bookings.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-base font-normal hover:no-underline">
                            How To Book the Cheapest Air Ticket Online?
                        </AccordionTrigger>
                        <AccordionContent>
                            Compare prices, be flexible with dates, book in advance, and use NixTour's affordable services
                            to find the best deals on air tickets.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-base font-normal hover:no-underline">
                            How To Refund Air Ticket Purchased At NixTour?
                        </AccordionTrigger>
                        <AccordionContent>
                            We offer a transparent refund process with complimentary rescheduling. Contact our customer
                            service team to initiate your refund request.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-base font-normal hover:no-underline">
                            Why We Should Book Air Tickets at NixTour?
                        </AccordionTrigger>
                        <AccordionContent>
                            NixTour offers competitive prices, transparent refund policies, free rescheduling, and excellent
                            customer service, making us your ideal choice for air ticket bookings.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

