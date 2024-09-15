import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-8 py-8">
      <Card className="bg-background dark:bg-dark">
        <CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-muted-foreground">
              If you have any questions or would like to collaborate on a
              project, feel free to reach out to me. I&apos;m always excited to
              connect with fellow developers and explore new opportunities.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button variant="default">Learn More</Button>
            <Button variant="outline">Explore</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-background dark:bg-dark">
        <CardContent className="grid md:grid-cols-2 gap-6 p-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-muted-foreground">
              We&apos;d love to hear from you. Contact us for any inquiries.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MailIcon className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">
                    Send us an email
                  </p>
                  <a
                    href="mailto:hello@relume.io"
                    className="text-sm text-primary hover:underline"
                  >
                    hello@relume.io
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    Give us a call
                  </p>
                  <a
                    href="tel:+1(555)000-0000"
                    className="text-sm text-primary hover:underline"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-sm text-muted-foreground">
                    123 Sample St, Sydney NSW 2000 AU
                  </p>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg flex items-center justify-center">
            <div className="text-muted-foreground">Map Placeholder</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
