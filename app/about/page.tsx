import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Youtube, Users, TrendingUp, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      number: "2M+",
      label: "Social Media Followers",
      link: "https://www.tiktok.com/@charlesperalo?lang=en",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      number: "2.5B",
      label: "Total Views",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      number: "1B+",
      label: "Poll Votes",
    },
    {
      icon: <Youtube className="w-8 h-8 text-blue-600" />,
      number: "4+",
      label: "Years Creating",
    },
  ]

  const funFacts = [
    "Started out as a biking bum in the Catskills writing on Facebook during the pandemic",
    "Turned clickbait headlines into educational content that actually teaches people",
    "Has failed at more startups than he could count before finding success in content",
    "Went from stealing twenties from his dad's drawer to making millions in revenue",
    "Once had six rotten teeth and was perpetually broke, now builds viral content",
    "His goal: building a trillion dollar company while having fun discussing everything",
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-blue-950/30 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">About Charles</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Making Clickbait<br className="sm:hidden" />
                <span className="sm:ml-2">Educational</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-slate-300 mb-8">
                Charles Peralo has built one of the most engaging content audiences online, with over 2 million
                followers across social media and 2.5 billion views. He transforms clickbait headlines into
                educational content that actually teaches people something, covering everything from celebrity news
                to business economics in a way that's both entertaining and informative.
              </p>
              <div className="flex gap-4">
                <Link href="/subscribe">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8">Subscribe Now</Button>
                </Link>
                <Button variant="outline" className="px-8 bg-transparent">
                  Watch Videos
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/charles-peralo.png"
                alt="Charles Peralo"
                width={400}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Charles's Full Story */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 px-4 py-2 text-sm font-semibold">The Real Story</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">From Broke to 2.5 Billion Views</h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              The unfiltered story of how a guy stealing twenties from his dad's drawer became one of the biggest content creators
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Opening Story */}
            <div className="lg:col-span-3">
              <Card className="p-8 shadow-lg border-0 bg-white dark:bg-slate-800">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-xl font-medium text-gray-900 dark:text-white mb-6 italic">
                    Hey guys, my name is Charles Peralo and in some circumstance, I got famous for that.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-2">CLICKBAIT EXAMPLE 1</p>
                      <p className="text-gray-700 dark:text-gray-300">"Millie Bobby Brown thong incident causes controversy!"</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-2">CLICKBAIT EXAMPLE 2</p>
                      <p className="text-gray-700 dark:text-gray-300">"Jenna Ortega got 350 million hours watched on Wednesday, but it all started with her wearing blood!"</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p className="font-bold text-green-800 dark:text-green-300 text-sm mb-2">CLICKBAIT EXAMPLE 3</p>
                      <p className="text-gray-700 dark:text-gray-300">"Jim Parsons was the highest paid Young Sheldon actor who never appeared!"</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Clickbait Philosophy */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Clickbait</h3>
              <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                A word often linked for bad content, lies and low effort, but for me, it's the path to get people engaged in actual knowledge.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg border-0 bg-white dark:bg-slate-800">
                <h4 className="font-bold text-lg mb-3 text-red-600">Millie Bobby Brown wearing a thong in Italy?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Turn it into a video showing how that headline came out when she just turned 18, with data proving it had more traffic than all Stranger Things news combined. Make it a piece on media grooming actresses as teens.
                </p>
              </Card>
              
              <Card className="p-6 shadow-lg border-0 bg-white dark:bg-slate-800">
                <h4 className="font-bold text-lg mb-3 text-blue-600">Jenna Ortega wore blood?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Show how she was labeled a Disney kid but due to an accident, showed up to her Wednesday audition with blood on her face. Went unconventional in branding and shows how sticking out lands a job.
                </p>
              </Card>
              
              <Card className="p-6 shadow-lg border-0 bg-white dark:bg-slate-800">
                <h4 className="font-bold text-lg mb-3 text-green-600">Jim Parsons quit Big Bang Theory?</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Tell the story of a man who wasn't even wanted for the part he dominated, ended up making 1.2 million an episode, but ultimately called it quits.
                </p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-900/20 dark:to-blue-900/20">
                <p className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  "I make headlines that are sometimes silly, sometimes tricky and sometimes weird, but they lead to stories that pack a bunch and sometimes actually get to teach people things."
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold">
                  <span className="text-red-600">2M+ Followers</span>
                  <span className="text-blue-600">2.5B Views</span>
                  <span className="text-green-600">1B Poll Votes</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Three Reasons */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Three Reasons I Made This Website</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 shadow-lg border-0 bg-white dark:bg-slate-800">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-red-600">1</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Narcissism</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Well… Gotta a little bit of that going for me, so of course I spent $2,000 buying the domain to my last name and gotta put a site up for it.
                </p>
              </Card>
              
              <Card className="p-8 shadow-lg border-0 bg-white dark:bg-slate-800">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Building a Company</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In my life, I've failed at more startups than I could count. Goal was always building a company, but the reality is I was trying to build being NEET.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="text-sm font-bold text-gray-700 dark:text-gray-300 space-y-1">
                    <div><strong>N</strong>o</div>
                    <div><strong>E</strong>ducation</div>
                    <div><strong>E</strong>mployment</div>
                    <div><strong>T</strong>raining</div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">The true signs of a really great founder!</p>
                </div>
              </Card>
              
              <Card className="p-8 shadow-lg border-0 bg-white dark:bg-slate-800">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Passion</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  During the pandemic, I had my 8th startup fail and a presidential campaign end in the same two weeks. I was broke, had six rotten teeth, living at home stealing twenties from my dad's drawer to buy food. But I had a passion for writing.
                </p>
              </Card>
            </div>
          </div>

          {/* The Journey */}
          <div className="mb-16">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
              <h3 className="text-3xl font-bold mb-6 text-center">The Catskills Journey</h3>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  I became a biking bum in the Catskills and wrote everyday, just on Facebook, discussing policy, politics, business, entertainment, technology and many other things. It was just some inner love of learning and discussing what was learned in a way that tried to keep bias low and bring different perspectives into topics which didn't get talked about a lot.
                </p>
                <p className="text-lg leading-relaxed">
                  I'd spend hours daily, celebrate the 30 likes a post I'd get and actually made some great contacts and friends, due to the posts being shared in the pandemic. Eventually friends suggested I try TikTok and somehow got more linked in celebrity news, but writing wise, I still felt that tick, that urge to research, write and create conversations.
                </p>
              </div>
            </Card>
          </div>

          {/* What's Next */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 shadow-lg border-0 bg-white dark:bg-slate-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What We'll Talk About</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Everything and anything!</p>
              <p className="text-gray-700 dark:text-gray-300">
                It could be the economics of McDonald's ice cream machines, debunking internet pseudo economics, reviewing TV shows or breaking down how much money Sydney Sweeney's boobs could be insured for. It's just whatever comes to mind that makes a fun and interesting topic!
              </p>
            </Card>
            
            <Card className="p-8 shadow-lg border-0 bg-white dark:bg-slate-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Goals</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="font-semibold">Goal A:</span>
                  <span className="text-gray-700 dark:text-gray-300">Building a trillion dollar company</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎉</span>
                  <span className="font-semibold">Goal B:</span>
                  <span className="text-gray-700 dark:text-gray-300">Having a lot of fun discussing stuff</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-4">
                  Not going to say A won't happen, but will be happy with B.
                </p>
              </div>
            </Card>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <Card className="p-12 shadow-xl border-0 bg-gradient-to-br from-red-600 to-red-700 text-white">
              <h3 className="text-2xl font-bold mb-4">Who the hell am I again?</h3>
              <p className="text-lg leading-relaxed mb-6">
                The guy who started out biking in the Catskills with teeth falling out of his mouth and turned an obsolete smartphone camera into 2.5 million daily viewers for three years, millions in revenue on Snapchat, recognition from names like Mark Cuban and Mr Beast...
              </p>
              <p className="text-2xl font-bold">
                I'm Charles Peralo, get ready to learn something! 🚀
              </p>
              <p className="text-sm mt-4 opacity-90">
                My qualifications? Hey, if Pete Hegseth can run the military, I can get a newsletter...
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600 dark:text-slate-300">Building a community of engaged learners</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{milestone.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{milestone.number}</div>
                <div className="text-gray-600">{milestone.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlight */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Content</h2>
            <p className="text-xl text-gray-600">See Charles in action breaking down the latest news</p>
          </div>

          <div className="space-y-12">
            {/* YouTube Short */}
            <Card className="overflow-hidden">
              <div className="relative">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/Ough2JSCvWQ"
                  title="YouTube Short"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64"
                ></iframe>
                <Badge className="absolute top-4 left-4 bg-red-600 text-white">YouTube Short</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Latest YouTube Short</h3>
                <p className="text-gray-600 mb-4">
                  Charles breaks down current events and trending topics in bite-sized, engaging formats.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>YouTube Short</span>
                  <span>Recent</span>
                </div>
              </CardContent>
            </Card>

            {/* TikTok Video */}
            <Card className="overflow-hidden">
              <div className="relative bg-black flex items-center justify-center p-4">
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@charlesperalo/video/6989993621395148038"
                  data-video-id="6989993621395148038"
                  style={{ maxWidth: "100%", minWidth: "325px", margin: 0 }}
                >
                  <section>
                    <a
                      target="_blank"
                      title="@charlesperalo"
                      href="https://www.tiktok.com/@charlesperalo?refer=embed"
                      rel="noreferrer"
                    >
                      @charlesperalo
                    </a>
                    <a
                      title="greenscreen"
                      target="_blank"
                      href="https://www.tiktok.com/tag/greenscreen?refer=embed"
                      rel="noreferrer"
                    >
                      #greenscreen
                    </a>
                    Johnny Depp bought Pirates crew jackets.
                    <a
                      title="johnnydepp"
                      target="_blank"
                      href="https://www.tiktok.com/tag/johnnydepp?refer=embed"
                      rel="noreferrer"
                    >
                      #johnnydepp
                    </a>
                    <a
                      title="piratesofthecaribbean"
                      target="_blank"
                      href="https://www.tiktok.com/tag/piratesofthecaribbean?refer=embed"
                      rel="noreferrer"
                    >
                      #piratesofthecaribbean
                    </a>
                    <a
                      title="amberheard"
                      target="_blank"
                      href="https://www.tiktok.com/tag/amberheard?refer=embed"
                      rel="noreferrer"
                    >
                      #amberheard
                    </a>
                    <a
                      title="hollywood"
                      target="_blank"
                      href="https://www.tiktok.com/tag/hollywood?refer=embed"
                      rel="noreferrer"
                    >
                      #hollywood
                    </a>
                    <a
                      title="celebrities"
                      target="_blank"
                      href="https://www.tiktok.com/tag/celebrities?refer=embed"
                      rel="noreferrer"
                    >
                      #celebrities
                    </a>
                    <a
                      target="_blank"
                      title="♬ Hedwigs Theme-Harry Potter - The Berlin Festival Orchestra"
                      href="https://www.tiktok.com/music/Hedwigs-Theme-Harry-Potter-6780510457489786882?refer=embed"
                      rel="noreferrer"
                    >
                      ♬ Hedwigs Theme-Harry Potter - The Berlin Festival Orchestra
                    </a>
                  </section>
                </blockquote>
                <Badge className="absolute top-4 left-4 bg-black text-white">TikTok</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Viral TikTok Content</h3>
                <p className="text-gray-600 mb-4">
                  Charles covers trending topics and cultural moments that resonate with millions of viewers.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>TikTok Video</span>
                  <span>Viral</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add TikTok embed script */}
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Real Story</h2>
            <p className="text-xl text-gray-600">From broke startup founder to content creator</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Community?</h2>
          <p className="text-xl text-red-100 mb-8">
            Get daily insights delivered straight to your inbox for just $3/month
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subscribe">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8">
                Subscribe Now
              </Button>
            </Link>
            <Link href="/newsletter">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 bg-transparent"
              >
                Read Free Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
