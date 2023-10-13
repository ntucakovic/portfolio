import React from "react";
import { iconEnvelope, iconLinkedin, iconTwitter, iconFile } from "../icons";

export const links = [
  {
    title: "Send me an email",
    href: "mailto:nt@ntmedia.me",
    target: "_blank",
    rel: "noopener noreferrer",
    label: (
      <span>
        nt<span className="text-emphasis">@</span>dzoni.dev
      </span>
    ),
    icon: iconEnvelope,
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
    icon: iconLinkedin,
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
    icon: iconTwitter,
  },
  {
    title: "Download my resume",
    href:
      "https://drive.google.com/uc?export=download&id=0B1aRGaIa4vgnUUpRT3diOFYybjQ&resourcekey=0-eWgMa7Dprb5KOUBsTXBrZg",
    target: "_blank",
    rel: "noopener noreferrer",
    label: (
      <span aria-hidden="true">
        Download my <span className="text-emphasis">resume</span>
      </span>
    ),
    icon: iconFile,
  },
];
