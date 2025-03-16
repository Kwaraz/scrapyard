'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FakeGutPainAd from '@/components/FakeGutPainAd';

export default function FakeNewsPage() {
  return (
    <div className="w-full mx-auto bg-white">
      {/* Top Ad Banner */}
      <div className="w-full bg-gray-100 py-2 text-center text-xs text-gray-700 border-b border-gray-200">
        Advertisement - Continue Reading Below
      </div>
      
      {/* Header */}
      <header className="border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-serif font-bold text-gray-900">THE SPACE CHRONICLE</h1>
          <div className="text-sm text-gray-700">
            Sunday, March 16, 2025 | 1:37 PM EDT
          </div>
        </div>
        <nav className="flex gap-6 text-sm text-gray-600 font-medium overflow-x-auto pb-2">
          <Link href="/" className="hover:text-red-700">HOME</Link>
          <Link href="/" className="hover:text-red-700">U.S.</Link>
          <Link href="/" className="hover:text-red-700">WORLD</Link>
          <Link href="/" className="hover:text-red-700">POLITICS</Link>
          <Link href="/" className="text-red-700 font-semibold">SCIENCE</Link>
          <Link href="/" className="hover:text-red-700">SPACE</Link>
          <Link href="/" className="hover:text-red-700">TECHNOLOGY</Link>
          <Link href="/" className="hover:text-red-700">HEALTH</Link>
          <Link href="/" className="hover:text-red-700">BUSINESS</Link>
        </nav>
      </header>

      {/* Breaking News Banner */}
      <div className="bg-red-700 text-white px-4 md:px-8 py-2 text-sm font-bold">
        BREAKING NEWS: NASA Incident Reported at Kennedy Space Center
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-6 px-4 md:px-8 gap-8 py-6">
        {/* Main Article - 5 columns for full-width feel */}
        <main className="md:col-span-5">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 leading-tight text-black">SHOCKING MISHAP: NASA Accidentally Launches Astronaut's Dog to the Moon</h2>
          
          <div className="text-sm text-gray-700 mb-4 flex items-center">
            <span className="font-semibold mr-2">By James Walker, Senior Space Correspondent</span> 
            <span className="mx-2">|</span>
            <span>Published March 16, 2025</span>
            <span className="mx-2">|</span>
            <span>Updated 5:32 AM EDT</span>
          </div>
          
          <div className="flex items-center gap-3 mb-4 text-sm">
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                </svg>
                Share
              </span>
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0v3H7V4h6zm-5 7a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
                </svg>
                Print
              </span>
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Email
              </span>
            </Link>
          </div>
          
          <div className="relative w-full h-[500px] mb-3">
            <Image 
              src="/dog.jpg" 
              alt="Bailey, the golden retriever, pictured with Captain Sarah Miller during training at NASA's facility last month. The dog was mistakenly sent to the moon during Saturday's launch." 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-sm">
              Bailey, the golden retriever, pictured enjoying his time in his rocket. (Photo: NASA/ J(AI)mes Scamerson)
            </div>
          </div>
          
          <article className="prose max-w-none text-gray-800">
            <p className="font-semibold text-lg">
              In an unprecedented mishap that stunned officials and space enthusiasts alike, NASA inadvertently launched an astronaut's dog to the Moon instead of its scheduled human crew. The incident occurred early Saturday morning at Kennedy Space Center, Florida, during the launch of the Artemis VI mission.
            </p>
            
            <p>
              Sources close to NASA reported that the error stemmed from a last-minute payload confusion caused by mislabeled cargo containers. The canine—a golden retriever named Bailey belonging to astronaut Captain Sarah Miller—had been brought to the launch site as part of a promotional event aimed at boosting public engagement with NASA's lunar exploration program.
            </p>
            
            <p>
              "We deeply regret this unprecedented error and are working tirelessly to ensure Bailey's safe return," said NASA Administrator Dr. Emily Carter in an emergency press conference held Sunday morning.
            </p>
            
            <div className="border-l-4 border-gray-300 pl-4 italic my-6">
              "Mission Control realized the error shortly after liftoff when Captain Miller and her crewmate, Commander James Lee, radioed from the ground asking why their spacecraft had launched without them."
            </div>
            
            <p>
              Despite initial panic, NASA engineers confirmed that Bailey was unharmed and stable within the spacecraft. The Orion capsule successfully entered lunar orbit late Sunday evening, and mission specialists are now remotely monitoring Bailey's condition while planning a rescue mission.
            </p>

            {/* Mid-article Ad */}
            <div className="border-t border-b border-gray-200 py-3 my-6 text-center">
              <FakeGutPainAd />
            </div>
            
            <h3 className="text-xl font-bold font-serif">SPACE AGENCY SCRAMBLES FOR SOLUTION</h3>
            
            <p>
              Officials at NASA have assembled an emergency team of engineers, veterinarians, and space flight specialists to devise a rescue plan. The team is considering several options, including accelerating the launch schedule of Artemis VII to retrieve Bailey or remotely piloting the current spacecraft back to Earth.
            </p>
            
            <p>
              Dr. Lisa Wong, NASA's chief veterinary consultant, stated that the Orion capsule's life support systems were fortunately designed with sufficient capacity to maintain Bailey's vital needs.
            </p>
            
            <p>
              "The spacecraft has adequate oxygen, regulated temperature, and we've been able to release food and water supplies remotely," Wong explained. "Bailey has been trained to respond to certain commands that will help us keep him calm during this unexpected journey."
            </p>
            
            <div className="bg-gray-50 p-4 my-6 rounded border border-gray-200">
              <h4 className="font-bold mb-2">Social Media Reacts with #BringBaileyHome</h4>
              <p className="text-sm text-gray-700">
                Social media users worldwide have rallied around the hashtag #BringBaileyHome, which has garnered over 3 million posts in the last 24 hours. Space enthusiasts, animal lovers, and celebrities have joined the campaign, offering support and, in some cases, financial contributions toward the rescue mission.
              </p>
            </div>
            
            <p>
              Captain Miller, visibly distressed during a press conference, thanked the public for their support. "Bailey is more than just my pet—he's part of our family and has been through all my training with me. NASA is doing everything possible to bring him home safely, and I have full confidence in their abilities."
            </p>
            
            <p>
              This story is developing and will be updated as more information becomes available.
            </p>
          </article>
          
          {/* Related Stories */}
          <div className="border-t border-gray-200 mt-8 pt-6">
            <h3 className="text-lg font-bold mb-4">Related Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="#" className="group">
                <div className="relative h-40 mb-2">
                  <div className="absolute inset-0 bg-gray-200"></div>
                </div>
                <h4 className="font-medium group-hover:text-blue-700">NASA's Artemis Program: Everything You Need to Know</h4>
              </Link>
              <Link href="#" className="group">
                <div className="relative h-40 mb-2">
                  <div className="absolute inset-0 bg-gray-200"></div>
                </div>
                <h4 className="font-medium group-hover:text-blue-700">Animals in Space: A History of Non-Human Astronauts</h4>
              </Link>
              <Link href="#" className="group">
                <div className="relative h-40 mb-2">
                  <div className="absolute inset-0 bg-gray-200"></div>
                </div>
                <h4 className="font-medium group-hover:text-blue-700">Most Expensive NASA Mistakes Through History</h4>
              </Link>
            </div>
          </div>
        </main>
        
        {/* Sidebar - 1 column */}
        <aside className="md:col-span-1">
          <div className="sticky top-4">
            <div className="bg-gray-50 p-4 mb-6 border border-gray-200 rounded">
              <h3 className="font-bold text-lg mb-3 border-b pb-2">Latest Updates</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <span className="text-red-700 font-semibold">1:15 PM</span>
                  <p className="font-medium">NASA confirms dog has adequate supplies for 14 days</p>
                </li>
                <li>
                  <span className="text-red-700 font-semibold">11:42 AM</span>
                  <p className="font-medium">White House issues statement on NASA mishap</p>
                </li>
                <li>
                  <span className="text-red-700 font-semibold">9:30 AM</span>
                  <p className="font-medium">Artemis VII mission may be expedited for rescue</p>
                </li>
                <li>
                  <span className="text-red-700 font-semibold">7:15 AM</span>
                  <p className="font-medium">Video: First footage from inside capsule released</p>
                </li>
              </ul>
              <Link href="#" className="text-blue-700 text-sm font-medium block mt-4 hover:underline">See all updates →</Link>
            </div>
            
            <div className="bg-gray-50 p-4 mb-6 border border-gray-200 rounded">
              <h3 className="font-bold text-lg mb-3">Most Read</h3>
              <ol className="list-decimal list-inside space-y-3 text-sm">
                <li className="font-medium hover:text-blue-700"><Link href="#">NASA Accidentally Launches Dog to Moon</Link></li>
                <li className="font-medium hover:text-blue-700"><Link href="#">SpaceX Announces Mars Colony Plans</Link></li>
                <li className="font-medium hover:text-blue-700"><Link href="#">James Webb Telescope Discovers Earth-like Planet</Link></li>
                <li className="font-medium hover:text-blue-700"><Link href="#">Asteroid Mining: The Future of Resource Collection?</Link></li>
                <li className="font-medium hover:text-blue-700"><Link href="#">China's Space Station Completes Final Module</Link></li>
              </ol>
            </div>
            
            {/* Sidebar Ad */}
            <div className="bg-gray-100 p-4 text-center border border-gray-200 mb-6">
              <p className="text-xs text-gray-700 mb-2">Advertisement</p>
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600">Ad Space</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      
      {/* Educational Disclaimer */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-4 md:mx-8 my-8">
        <h3 className="font-bold text-lg mb-2 text-gray-800">The Dangers of Fake News and AI-Generated Content</h3>
        <p className="text-sm text-gray-700">
          The above story is entirely fictional; no such event has occurred involving NASA or any astronaut's pet. This page demonstrates how fake news can appear legitimate with proper formatting, imagery, and writing style. With advancements in artificial intelligence technologies, creating convincing yet entirely false articles has become easier than ever before. It is crucial for readers to critically evaluate sources, verify information through trusted news outlets, and remain vigilant against misinformation in today's digital landscape.
        </p>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 md:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <div>
            <h4 className="font-bold mb-4 text-lg">THE SPACE CHRONICLE</h4>
            <p className="text-sm text-gray-300">This is an educational demonstration of how fake news can appear legitimate. No actual news content is presented.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Sections</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">Home</Link></li>
              <li><Link href="#" className="hover:text-white">U.S.</Link></li>
              <li><Link href="#" className="hover:text-white">Science</Link></li>
              <li><Link href="#" className="hover:text-white">Space</Link></li>
              <li><Link href="#" className="hover:text-white">Technology</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Advertise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-sm text-gray-400 text-center">
          <p>© 2025 The Space Chronicle | Educational Demonstration | No actual news content</p>
        </div>
      </footer>
    </div>
  );
};