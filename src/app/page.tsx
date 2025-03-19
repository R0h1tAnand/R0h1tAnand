"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 className="animateLeft">
        Hi <span className="wave">👋</span> My name is Rohit Anand
      </h1>
      <p className="animateLeft">An individual dedicated to becoming a proficient Cyber Security professional.</p>
      <p className="animateLeft">
        🌍 I'm based in India.<br />🧠 I'm currently learning Bash and Python.
      </p>
      <div className="followers animateLeft">
        Always trying to do better than yesterday......🙃
      </div>
      
      {/* Skills Section */}
      <div className="skills animateLeft">
        <Image src="https://img.icons8.com/color/48/000000/c-programming.png" alt="C" width={50} height={50} />
        <Image src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="C++" width={50} height={50} />
        <Image src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" width={50} height={50} />
        <Image src="https://img.icons8.com/color/48/000000/python.png" alt="Python" width={50} height={50} />
        <Image src="https://img.icons8.com/color/48/000000/bash.png" alt="Bash" width={50} height={50} />
        <Image src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MySQL" width={50} height={50} />
      </div>

      {/* Socials Section */}
      <div className="socials animateLeft">
        <Link href="https://github.com/R0h1tAnand" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" width={50} height={50} />
          </a>
        </Link>
        <Link href="https://linkedin.com/in/yourusername" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" width={50} height={50} />
          </a>
        </Link>
        <Link href="https://tryhackme.com/p/r0hit.A" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src="https://assets.tryhackme.com/img/THMlogo.png" alt="TryHackMe" width={50} height={50} />
          </a>
        </Link>
      </div>
    </div>
  );
}
