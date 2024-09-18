import logo from '../../assets/logo.png';
import { Button } from "@/components/ui/button"
import Login from "@/components/login/login"
import circle from '../../assets/Circle Scatter Haikei.svg';

const HomePage = () => {

  return (
    <main className={"px-10 flex flex-col"}>
      <nav className={"py-5 sticky top-0 left-0 right-0 flex justify-between bg-white"}>
        <div className={"flex items-center"}>
          <img className={"h-7 pe-2"} alt={'logo'} src={logo} />
          <h1 className={"font-black text-2xl"}>sprack</h1>
        </div>
        <div>
          <Login />
          <Button className={"ms-3"}>Sign up</Button>
        </div>
      </nav>

      <section className={"text-center py-40"}
               style={{ backgroundImage: `url(${circle})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
      >
        <h1 className={"font-bold text-6xl"}>Where <span className={"text-slack-purple-500"}>work</span> happens</h1>
        <p className={"mt-5 text-xl"}>Collaborate with your team in real-time, from anywhere.</p>
        <Button className={"mt-10"}>Get Started</Button>
      </section>

      <section className={"py-20"}>
        <h2 className={"font-bold text-4xl text-center"}>Features</h2>
        <div className={"flex flex-col md:flex-row justify-around mt-10"}>
          <div className={"text-center mb-10 md:mb-0"}>
            <h3 className={"font-bold text-2xl"}>Task Management</h3>
            <p className={"mt-2"}>Keep track of your tasks and projects.</p>
          </div>
          <div className={"text-center mb-10 md:mb-0"}>
            <h3 className={"font-bold text-2xl"}>Real-time Collaboration</h3>
            <p className={"mt-2"}>Work together with your team in real-time.</p>
          </div>
          <div className={"text-center"}>
            <h3 className={"font-bold text-2xl"}>File Sharing</h3>
            <p className={"mt-2"}>Easily share files with your team.</p>
          </div>
        </div>
      </section>

      <section className={"py-20 bg-gray-100 rounded-lg"}>
        <h2 className={"font-bold text-4xl text-center"}>About Us</h2>
        <div className={"mt-10 text-center"}>
          <p className={"text-xl"}>We are a team of passionate individuals dedicated to making collaboration easier and
            more efficient.</p>
          <p className={"mt-4"}>Our mission is to provide the best tools for teams to work together seamlessly.</p>
        </div>
      </section>

      <footer className={"py-10 text-center"}>
        <p>&copy; {new Date().getFullYear()} Sprack. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default HomePage;