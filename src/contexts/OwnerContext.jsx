import { useState, createContext, useContext } from "react";

const OwnerContext = createContext();

export function OwnerContextProvider({ children }) {
  const [owner] = useState({
    header: {
      logo: "Matheus",
    },

    home: {
      name: "Matheus Bibiano Alves",
      image: "./img/me.png",
      profile:
        "Sou um programador dedicado e focado na solução de problemas. Para mim, a programação não é apenas um hobby, mas uma fonte de desenvolvimento pessoal e aprendizagem contínua.",

      links: {
        linkedIn: "https://www.linkedin.com/in/matheus-bibiano-alves",
        gitHub: "https://github.com/MatheusBibiano",
      },
    },

    about: {
      description:
        "Comecei na programação aos 15 anos, foi quando percebi que não conseguiria viver mais sem ela. Desde então, busco aprimorar minhas técnicas e me aprofundar nos estudos acerca das tecnologias e linguagens, focando sempre na prática e consumindo o conhecimento oferecido por profissionais mais experientes da área.",

      experience: "4+",
      projects: "4+",

      links: {
        curriculum: "./docs/curriculo.pdf",
      },
    },

    skills: {
      frontend: ["HTML", "CSS", "JavaScript", "ReactJS", "React Native"],

      backend: ["Node.js", "PHP", "MySQL"],

      frontExperience: "Mais de 1 ano",
      backExperience: "Mais de 1 ano",
    },

    qualification: {
      education: [
        {
          title: "Redes de Computadores",
          location: "CEFET-MG Campus IX",
          date: "2017 - 2020",
        },
        {
          title: "Análise e desenvolvimento de sistemas",
          location: "Unilavras",
          date: "2021 - 2023",
        },
      ],
      work: [
        {
          title: "Desenvolvedor Web",
          location: "Unilavras",
          date: "2022",
        },
      ],
      certificates: [
        "html.jpg",
        "css.jpg",
        "js.png",
        "responsive_design.jpg",
        "php.jpg",
      ],
    },

    portfolio: {
      projects: [
        {
          image: "./img/projects/orphanage.png",
          title: "Projeto Orfanato",
          desc: "Projeto desenvolvido ao longo da trilha Discovery da terciera edição do evento Next Level Week.",
          link: "https://github.com/MatheusBibiano/Projeto-Orfanato",
        },
        {
          image: "./img/projects/moveit.png",
          title: "MoveIt",
          desc: "Uma aplicação para auxiliar na saúde física de pessoas que trabalham muito tempo em frente ao computador. Esse porjeto foi desenvolvido ao longo da quarta edição do evento Next Level Week.",
          link: "https://github.com/MatheusBibiano/MoveIt",
        },
        {
          image: "./img/projects/dml.png",
          title: "Projeto DML",
          desc: "Site acadêmico com a finalidade de apresentar informações demográficas das microrregiões de Lavras-MG, incluindo tabelas e mapas.",
          link: "https://github.com/MatheusBibiano/Projeto-DML",
        },
        {
          image: "./img/projects/ecommerce.png",
          title: "E-commerce",
          desc: "Projeto de um e-commerce requerido como trabalho para a disciplina de Programação Web.",
          link: "https://github.com/MatheusBibiano/E-Commerce",
        },
        {
          image: "./img/projects/xbox.png",
          title: "Xbox 360 | Menu",
          desc: "Este repositório contém uma réplica web do layout do menu de um XBOX 360.",
          link: "https://github.com/MatheusBibiano/XBOX-360-Menu",
        },
      ],
    },

    contact: {
      address: {
        phoneNumber: "+00 (00) 00000-0000",
        email: "exemplo@exemplo.com",
        city: "Cidade",
        street: "Rua, Bairro",
        number: "Número",
      },
    },
  });

  return (
    <OwnerContext.Provider value={{ owner }}>{children}</OwnerContext.Provider>
  );
}

export function useOwner() {
  return useContext(OwnerContext);
}
