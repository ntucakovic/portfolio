import React from "react";
import * as icons from "../icons";

const logo = {
  logo: icons.logo,
  description: "NT Logo"
};

const hobbies = [
  "Web Design",
  "UI/UX",
  "Technology & Innovation",
  "Music",
  "Nomad Lifestyle",
  "Traveling",
  "Nature Wandering",
  "Photography",
  "Mountain Biking",
  "Snowboarding",
  "Paddleboarding",
  "Basketball"
];

const links = [
  {
    title: "Send me an email",
    href: "mailto:nt@ntmedia.me",
    target: "_blank",
    rel: "noopener noreferrer",
    label: (
      <span>
        nt<span className="text-emphasis">@</span>ntmedia.me
      </span>
    ),
    icon: icons.envelope
  },
  {
    title: "Visit my Linkedin Account",
    href: "https://rs.linkedin.com/in/nikolatucakovic",
    target: "_blank",
    rel: "noopener noreferrer",
    label: (
      <span>
        nikola<span className="text-emphasis">tucakovic</span>
      </span>
    ),
    icon: icons.linkedin
  },
  {
    title: "Catch me on Twitter",
    href: "https://twitter.com/_ntucakovic",
    target: "_blank",
    rel: "noopener noreferrer",
    label: (
      <span>
        _<span className="text-emphasis">ntucakovic</span>
      </span>
    ),
    icon: icons.twitter
  },
  {
    title: "View my Instagram pics",
    href: "https://www.instagram.com/nikola.tucakovic",
    target: "_blank",
    rel: "noopener noreferrer",
    label: (
      <span>
        <span className="text-emphasis">nikola</span>.<span className="text-emphasis">
          tucakovic
        </span>
      </span>
    ),
    icon: icons.instagram
  },
  {
    title: "Message me on Skype",
    href: "skype:ntmediasolutions?chat",
    target: "_blank",
    rel: "noopener noreferrer",
    label: (
      <span>
        <span className="text-emphasis">ntmedia</span>solutions
      </span>
    ),
    icon: icons.skype
  },
  {
    title: "Download my resume",
    href:
      "https://drive.google.com/uc?export=download&id=0B1aRGaIa4vgnUUpRT3diOFYybjQ",
    target: "_blank",
    rel: "noopener noreferrer",
    label: (
      <span aria-hidden="true">
        Download my <span className="text-emphasis">resume</span>
      </span>
    ),
    icon: icons.file
  }
];

const repository = {
  href: "https://github.com/ntucakovic/portfolio",
  target: "_blank",
  rel: "noopener noreferrer",
  title: "Read code on GitHub",
  icon: icons.github
};

export { logo, hobbies, links, repository };
