import React from 'react';
import Header from '../components/Header';
import Divider from '../components/Divider';
import Footer from '../components/Footer';
import styles from '../../styles/dashboard.module.css';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-800">
      <Header />
      <div className="container mx-auto py-8 mt-8">
        <div
          className={`relative bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg p-6 text-white ${styles['gradient-animation']}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-shadow mb-4">
                Welcome to Vidy-Verse: Where Creativity Meets Professionalism
              </h1>
              <p className="text-xl">
                Embark on an enchanting journey through the world of Vidy-Verse,
                where creativity, cuteness, and professionalism unite in perfect
                harmony. Discover captivating designs, delightful animations,
                and expertly crafted content that showcase remarkable talents
                and achievements. With a touch of whimsy and a dash of
                professionalism, Vidy-Verse takes you on a delightful adventure
                through stunning portfolios that capture hearts and inspire
                minds. Get ready to be charmed by the magic of creativity and
                leave a lasting impression with your own captivating portfolio.
                Welcome to Vidy-Verse, where dreams become reality!
              </p>
              <div className="flex items-center mt-6">
                <div className="bg-white rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-indigo-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-300 ml-4">
                  Scroll down to explore more!
                </p>
              </div>
            </div>

            <div className="w-1/2">
              <img
                src="https://i.pinimg.com/564x/ed/de/36/edde365aae4dcd19515df053b4c74e91.jpg"
                alt="Vidy-Verse"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <Divider />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 lg:col-span-1">
            <div className="w-full h-96 overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/2f/a9/5e/2fa95e9ee978dfb33da8505fa8d3dea0.jpg"
                alt="Stelle"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="bg-white p-4 text-black">
              <h2 className="text-2xl font-bold mb-4">
                Stelle - Honkai Star Rail
              </h2>
              <p className="text-lg line-clamp-3">
                Stelle, a delightful character from Honkai Star Rail, captivates
                the hearts of players with her infectious charm and endearing
                personality. With her vibrant brown hair and sparkling hazel
                eyes, she exudes a sense of wonder and adventure. Stelle
                possesses an unwavering spirit, always ready to lend a helping
                hand to her friends and face any challenge with a cheerful
                attitude. Her determination shines through in her radiant smile,
                lighting up the darkest of moments. Whether she&apos;s wielding
                her magical staff or simply enjoying a peaceful moment under a
                starry sky, Stelle&apos;s presence brings joy and warmth to the
                world around her.
              </p>
              <a
                href="#"
                className="text-blue-500 font-semibold mt-4 inline-block"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 lg:col-span-1">
            <div className="w-full h-96 overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/b1/bd/a3/b1bda3c0243ea4035a285e54d8d0a1a6.jpg"
                alt="Taerae"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="bg-white p-4 text-black">
              <h2 className="text-2xl font-bold mb-4">TAERAE</h2>
              <p className="text-lg line-clamp-3">
                Kim Tae Rae from ZEROBASEONE is not only a talented and skilled
                vocalist but also an incredibly cute person. His melodic voice
                has the power to captivate hearts and transport listeners to
                another world. With each note he sings, he effortlessly conveys
                emotions and touches the souls of those who hear him. Beyond his
                exceptional vocal abilities, Tae Rae&apos;s endearing charm and
                adorable personality make him impossible to resist. His genuine
                smile and playful nature light up any room, instantly bringing
                joy to those around him. Kim Tae Rae is truly a gem, both in
                terms of his musical talent and his irresistible cuteness.
              </p>
              <a
                href="/about"
                className="text-blue-500 font-semibold mt-4 inline-block"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 lg:col-span-1">
            <div className="w-full h-96 overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/a2/8d/a0/a28da0643a1339b51d707b0af7b8133c.jpg"
                alt="Hao"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="bg-white p-4 text-black">
              <h2 className="text-2xl font-bold mb-4">ZHANG HAO</h2>
              <p className="text-lg line-clamp-3">
                Zhang Hao from ZEROBASEONE is the shining center of the group,
                bringing talent, charm, and an infectious energy to every
                performance. Not only does he possess an incredible vocal range
                that leaves audiences spellbound, but he also showcases his
                intelligence through his insightful lyrics and creative ideas.
                Beyond his artistic abilities, Hao&apos;s kind heart shines
                brightly, spreading warmth and compassion to everyone around
                him. With his gentle smile and caring nature, he uplifts those
                in need and inspires others to be their best selves. Zhang Hao
                is not just a talented artist but a remarkable individual with a
                heart of gold, making him the beloved center of ZEROBASEONE and
                a role model for many.
              </p>
              <a
                href="#"
                className="text-blue-500 font-semibold mt-4 inline-block"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4 lg:col-span-1">
            <div className="w-full h-96 overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/49/20/3b/49203be0e808fdc3f9dd5eab84fa648f.jpg"
                alt="Herta"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="bg-white p-4 text-black">
              <h2 className="text-2xl font-bold mb-4">
                Herta - Honkai Star Rail
              </h2>
              <p className="text-lg line-clamp-3">
                Herta from Honkai Star Rail is an absolutely cool and
                brilliantly intelligent individual. With her effortless style
                and confident demeanor, she exudes an aura of undeniable
                coolness that captivates everyone around her. Herta&apos;s sharp
                wit and quick thinking make her a force to be reckoned with, as
                she flawlessly strategizes and tackles challenges head-on. Her
                vast knowledge and exceptional problem-solving skills never fail
                to impress, earning her the admiration of her peers. But beneath
                her cool exterior, Herta possesses a warm heart and a caring
                nature, always ready to lend a helping hand. Herta is the
                epitome of coolness and intelligence, a true standout in the
                world of Honkai Star Rail.
              </p>
              <a
                href="/about"
                className="text-blue-500 font-semibold mt-4 inline-block"
              >
                Learn about us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
