import { SectionTitle } from "@/components/section-title";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="-mt-24 pt-56 pb-24 md:pt-64 md:pb-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Partner with us to create a healthier future. Have questions about our products or scientific services? Reach out today."
          align="center"
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-secondary">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Main Office</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Science Park, Plot 45, Genome Valley,<br />
                      Bangalore, Karnataka 560001,<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 40 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Email</h4>
                    <p className="text-muted-foreground">hello@mythronpharma.com</p>
                    <p className="text-muted-foreground">collab@mythronpharma.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="w-full h-80 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-xl bg-slate-200">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.9008994491!2d77.49085891395984!3d12.953810214227894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e07%3A0xf8dfa3e94857c636!2sBengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1710609312345" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
