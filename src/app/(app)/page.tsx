"use client";

import { Mail } from "lucide-react"; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import messages from "@/messages.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 text-white max-w-screen h-screen">
        
        <div className=" flex flex-col items-center justify-center  mt-16 w-full space-y-6">

          <section className="text-center space-y-3 max-w-fit sm:space-y-6">
           
            <h1 className="text-2xl sm:text-4xl md:leading-tight md:text-5xl font-bold leading-tight">
              Known about your self by get Anonymous Feedback
            </h1>
           
            <p className="text-sm  md:text-lg">
              Feedbackify - Where your identity remains a secret.
            </p>
          
          </section>

          {/* Carousel for Messages */}
          <Carousel
            plugins={[Autoplay({ delay: 2000 })]}
            className="w-full max-w-lg md:max-w-xl rounded-lg overflow-hidden"
          >
            <CarouselContent>
              {messages.map((message, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{message.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex md:flex-row items-start md:space-y-0 md:space-x-4  space-x-4 ">
                      <Mail className="flex-shrink-0" />
                      <div >
                        <p>{message.content}</p>
                        <p className="text-xs text-muted-foreground">
                          {message.received}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </main>
    </>
  );
}
