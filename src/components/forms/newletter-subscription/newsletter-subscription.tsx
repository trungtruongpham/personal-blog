import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSubscription = () => {
  return (
    <div className="m-8 w-full md:w-10/12 mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="mb-6">
        Stay up to date with the latest news and updates, and receive exclusive
        content and offers.
      </p>

      <div className="flex items-center">
        <Input
          type="email"
          placeholder="Email Address"
          className="mr-4 flex-grow"
        />
        <Button variant={"default"}>Subscribe</Button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
