export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      \
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
            text-transparent text-center"
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover: shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="font-bold my-6 text-xl">Food Ordering app </h3>
            <div className="text-gray-400 mb-4">
              <p>
                Developed a responsive food ordering app using React and
                Tailwind CSS, allowing users to browse various restaurants and
                place food orders seamlessly.
              </p>
              <p>State management using Redux for efficient data handling.</p>
              <p>Component and UI testing with React Testing Library.</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TailwindCSS", "Redux", "React Router"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                        hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/AbhishekMadiwale/Swiggy-clone"
                className="flex text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
                <img
                  className="h-10 w-10 ml-6"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEUAAAD////7+/vv7+/Hx8f29vbg4ODp6emtra2SkpJXV1fQ0NDy8vLl5eWHh4czMzPX19cJCQlNTU0+Pj52dna2trZ/f38gICBiYmKnp6eZmZnBwcFHR0cUFBQ4ODgrKytubm4QViIlAAAHJklEQVR4nN1ca5uyOgyUu4oXFBAEXfj/v/JdRARKMw3Quuc581VWZtMkTaapm83/Gc/z+fnXHF7I9smpcCPHGsCJ3OKU7LO/IZRvQ/9gETj44Tb/LrGf5O5TdIbw78nPlyglbsBh1CJwky8wKj0+oxZeaZRXVRznMmpxLCpDlPZbexmlBvZ2b4DSw529bmN47kMzpX26jlGLVKe1qvtKK3Xw7tp86+SoX8eFc9JC6Rrqo9QgvK7ntFsRcnLYu5WUfjSbqUW4avNJNHrTEM7yHH8pzFBqUFwWkjKydB3CRZSuC/c5Lo4LovBqyJ16OLNZnbRnginsmYm0Nk+pQT2H0+47nCxrRh79kp0asG11+x4ny7rxOF011Sk8eKwYNJ8LxmBlBlZHpxO+mpP7bU6W5ao4GdyDaRSY0xeTwRA14nSWNuTb+rZLo9X7ju2nxa1OZLEdnOc61OH9YZKSIgsD7uktwkibNeBWJ/nXfT6PbwvLmcO9j/tc+gS5N5/lWXO04HW0gNJuqPGdpf+YRy2gPBsc4tFDz3ymtbyd8D55s00sYCL/0mgiyJ3GFnX8ME23LVLXD8YRkU46FyLrSHuJjLBAOn00Ll+fHILonsQ/VTZYnUtWnX/ywj06L25+Pf1ruVNZR5kaSdVQ0sx286PtCW5a57pwna2sZ7kQG76ktoqpfVjeoj0Z+vSFUGIJUk48eXJLcLJq9dtngoqUrfjgmeJkT/mvBZlVxLRAimK2bv0NkBJiivSor1pK8Cq6YrFz7aToMnIU6U9QljMr+xmgX+YNY5pI5i/cdXM6gyJomH/QLivJ6OuALBD1j+1RUxXqPsZDFbfXi9p38JhlaRBOR4CtSe8suNPTIzJ/8IC9rtM9doWcdOeECpeJ3bqQ294LawXmCYgC9433BviEPbH24CMLqhZ+G1c5Yn5Ezc9SoMDyWm+BCpn+TaYBOu9t4wqFqLLNXwaUP9tXIlvqzlEdkCGaz8ny7helIU5Qs2i8WN4WtzBx7tsCeFXjVOAg1lF+92IAUzRJCJzAKHSjNQA1QEi19i/Y5lZvc6Ft8ZsaAWXfROLsQO9tv+ULiANjsdcAvLdGSr72QniIjH7vDW0y+luGIej37lDdYiqdt6Aryy1K+GYHsujwc1GaMjv4R1sjRKceRjltSvK9PtqE/opUsAHa+F8t32EDemhTI2staGe2UYlnNiWATgtZSr9cNgTtzDbqjs00DR3o9zooJWhvQ5mkfLS0E7VWJ2L6vRHK6EZLlz393hCRCpfOOHEAqpMQJFYr0C8M9wD9Sgl1NYPhlwFfLuAMiWa5bIgr2N5usFddNqLGApKD6k2OTtHNkQIuZefQjgardGAK57rJkI73JwKHn2FVRnIuqAcgEb0EKiiiG2r99siRm3dCWdQzQwqO3L+yI3rAjKmQTvcOeTjBcjDhVcij3qM1WNs3kECRdtitDZJqLQO5KsNHQe2RX6y4xVTr5fTEZzPBWyxQjHgHelstxWWXzl1UQ7mBzrZGdQGnq0wqxXM6dUblpaDPsijHKL1aDyX1PY7+3AXHaANbi3q9V8+D9XWlfGhxDH91bRzjhPjCcIwRptjOWOmqKLywLk8NayXhFNkOyzKUfEe62Frxjje6PdJURgntuH/+5riHZFDRi04LRKtLXjInt8d72qin+YxR1BJfs8NdPqdJvd5K/r1XYaptVBR/lI1Kmiy8ICz2o/FAqX2y6nEqj3OmaMUh8PGu3CcAOoU5UQlcrErDGReD3xDH/57jFPLJ4ReQWCNkqwUXSo6T7xMSaH/Rhux2fLx+jKwkQNKQi7HW2ZI8e6shJ0VFK0Ek+Q5RMPocQRILoSxJ1ZvXGNIjTzGtd50McYipTKTgzFUG+fzKQ2zGusdi2QL66k1nlldRo5sTqerjVpLekSGIzrowQam+F9HXg+4TScPK0K6eM65FyLy8xWQI7JNE40li4PSD/PTpgYpbDLS+vMmK0b9ts+Rs/sUgKNmLETgsOHdR0FjSC3xuCYMHEAfAktNZqDEOo0/jPEmSPGYXCdzrSo6iMbkKzrlKi2WmT1t5XCZ8kb/md1CYtxcZ/7iQ8tYc0PBIcd4g7iorfmqERYp52CLk0OVuxfEpOmuOUQmZcrGaxyA1QxEQ9nfntKzlU5MKZvQgD3FXOQo/NPJkBaWS1MxL95Ii2C/vRYN7Gjm86V0VKcYV1hEyhT7CyhQKUtF8p8C7KctSuKPhxt0IcDtdT0p6eUyNGxAl1pKa+1sJPYBuvJKUs0JGrUiJkkWKLF3KdSLqjRBx1pA6rD6b/pFHIet4Uk4q1KGAS4212FKepgmaStJVsiwlSSqpvlOxOBRbuGWkIr1zYqIAuoTUUf/h/X5krfmkIjNDKvmgK2QVfgPNMqyNUGpQFe9VRG12j/O7APKnd8n1om5CMWAuxatYLG9/8zuaAP85QkvxD9pqXPq353vBAAAAAElFTkSuQmCC"
                />
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover: shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="font-bold my-6 text-xl">Movie Browsing Platform</h3>
            <div className="text-gray-400 mb-4">
              <p>
                Built a dynamic movie platform using React, Tailwind CSS, and
                the TMDB API, allowing users to explore and search movies by
                genre and category.
              </p>
              <p>
                Integrated TMDB API to fetch real-time movie data. Movie listing
                with thumbnails, ratings, and descriptions
              </p>
              <p>Genre-based search and filtering functionality.</p>
            </div>
            <div className="my-5">
              {["React", "TailwindCSS", "TMDB API"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm
                        hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://github.com/AbhishekMadiwale/Netflix-gpt"
                className="flex text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
                <img
                  className="h-10 w-10 ml-6"
                  src="data:image/png;base64,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"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
