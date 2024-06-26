import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Marmalade Professional Networking - FAQ</title>
    <meta 
      name="description"
      content="FAQ for how to do professional networking virtually using the Marmalade platform.
      In the beta, we are working closely with specialists in UX design,
      digital marketing, and machine learning to understand networking problems and make this
      really work for people."
    />
  </>
);


const Faq = () => {
  return (
    <Layout>
      <main><h1 className="pt-3 pb-3">FAQ</h1>
        <article className="pt-5">
          <div className="mx-auto">
              <p>
                Last reviewed: <time dateTime="2024-4-17">April 17, 2024.</time>
              </p>
              <br/>
              {/* <div class="max-w-screen-lg mx-auto"> */}
              <div>
                <div>
                  <h2>Getting Started</h2>
                    <h3>How do I start doing professional networking <i>virtually</i>?</h3>
                      <p>We haven't launched yet. We'd love to listen to your needs and show you what we're building.</p>
                    <h3>What does it cost?</h3>
                      <p>Free for beta users.</p>
                    <h3>Is this a global service?</h3>
                      <p>No. The beta is only available in the U.S.</p>
                </div>
                <div>
                  <h2>Building Your Network</h2>
                    <h3>How do I connect with other people?</h3>
                      <p>Fill out your profile, and you get a professional network that is virtual with other people that have registered. Check back regularly because the network will grow.</p>
                    
                    <h3>Can I find a job through this?</h3>
                      <p>80% of jobs are found by networking, so sure, being on the platform helps build 
                        your professional network. We're actually hearing from hiring managers that they now get
                        deluged by resumes tailored to match a job description and get 
                        past the ATS. All the more reason to network!</p>

                    <h3>What can I learn through this?</h3>
                      <p>Your virtual network is a great resource for learning and sharing whatever is new or relevant in your work.</p>
                    
                    <h3>What if I want to be mentored? Or to mentor?</h3>
                      <p>Indicate that in your profile.</p>

                    <h3>How do I contact people?</h3>
                      <p>For now, set up a Zoom call. We plan to incorporate video chat, including calls and 
                        scheduled calls, indicating you are not available (default) or are available (when), 
                        about what topics, and so forth.</p>
                    
                    <h3>What if my specialization is not supported?</h3>
                      <p>Networking applies to everyone. In beta, the focus is on 
                        a small number of specific areas. If your specialization is something else,
                        you are welcome to participate, but you may not find the matching to be as good.</p>
                </div>
                <div>
                  <h2>Your Information</h2>
                    <h3>Will my information be protected?</h3>
                      <p>Yes. See our <Link to="/privacy-policy">Privacy Policy</Link>.</p>

                    <h3>Will my information be sold to third parties?</h3>
                      <p>No.</p>
                    
                    <h3>Will there be advertising on the website?</h3>
                      <p>No.</p>
                    
                    <h3>How do you plan to make money?</h3>
                      <p>As a subscription service.</p>

                    <h3>Where else can I ask questions about Marmalade AI?</h3>
                      <p>Please <a href="mailto:info@marmalade.ai">contact us</a></p>

                </div>
              </div>                
          </div>
          </article>
        </main>    
    </Layout>
  )
};

export default Faq;
