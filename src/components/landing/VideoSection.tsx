
import React, { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const VideoSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="video-section" className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background rounded-3xl my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">See Expense Tracker in Action</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Watch how easy it is to manage your finances with our intuitive interface
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogTrigger asChild>
            <div className="relative cursor-pointer hover-scale group">
              {/* Demo image with play button overlay */}
              <div className="rounded-xl overflow-hidden shadow-lg aspect-video bg-black/5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000" 
                  alt="Expense Tracker Tutorial Video" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="rounded-full h-16 w-16 flex items-center justify-center bg-white group-hover:bg-primary transition-colors"
                  >
                    <Play className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </Button>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] p-0 bg-black overflow-hidden">
            <div className="aspect-video w-full">
              {/* Free YouTube video embed for expense tracking tutorial */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/HQzoZfc3GwQ" 
                title="Expense Tracker Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Feature 1 */}
        <div className="bg-card p-6 rounded-xl hover-scale text-center dark:bg-gray-800">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-primary font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Capture Expenses</h3>
          <p className="text-muted-foreground">
            Quickly log your expenses with our easy-to-use interface
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-card p-6 rounded-xl hover-scale text-center dark:bg-gray-800">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-primary font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Analyze Spending</h3>
          <p className="text-muted-foreground">
            Visualize your spending patterns with intuitive charts and graphs
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-card p-6 rounded-xl hover-scale text-center dark:bg-gray-800">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
            <span className="text-primary font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Optimize Budget</h3>
          <p className="text-muted-foreground">
            Make data-driven decisions to improve your financial health
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
