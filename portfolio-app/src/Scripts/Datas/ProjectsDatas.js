const projects = [
    {
        name: "GumGum Cup",
        cover: "GumGupCup.png",
        teammates: 15,
        tags:
            [
                {
                    name: "Game",
                    color: "#d44646",
                    tooltip: "One-level 3D platformer"
                },
                {
                    name: "UE4",
                    color: "#3930b3",
                    tooltip: "Made with Unreal Engine 4"
                },
                {
                    name: "C++",
                    color: "#db773d",
                    tooltip: "Used language"
                }
            ],
        date: "September 2023 - June 2024",
        duration: "8 months",
        description: "This was the biggest game project I worked on at Isart, involving a team of <b>15 students</b>, including 2D and 3D artists, programmers, designers, producers, and a talented sound designer. In just one school year, we created GumGum Cup, a fun party game where players take on the role of students aiming to eject as many enemies as possible using gum abilities. The game supports 2 to 4 players. As a Game Programmer, I focused mainly on the gum abilities, particularly a <b>thread mechanic that behaves like a cable, wrapping and unwrapping around physical and static objects, and applying forces to them</b>.",
        images: [
            "GUMGUMCUP_Tread.gif",
            "GUMGUMCUP_Gameplay.gif",
            "GUMGUMCUP_Gameplay_01.jpg",
            "GUMGUMCUP_Gameplay_02.jpg",
            "GUMGUMCUP_Gameplay_03.jpg"
        ],
        itchio_link: "https://isart-digital.itch.io/gumgumcup"
    },
    {
        name: "EcoAI",
        cover: "EcoAI.svg",
        teammates: 0,
        tags:
            [
                {
                    name: "Research",
                    color: "#d44646",
                    tooltip: "This is a research project"
                },
                {
                    name: "Unity",
                    color: "#3930b3",
                    tooltip: "Made with Unity"
                },
                {
                    name: "C#",
                    color: "#db773d",
                    tooltip: "Coded with C# language"
                },
                {
                    name: "AI",
                    color: "#3b4fd1",
                    tooltip: "Neural networks"
                },
            ],
        date: "March 2023 - June 2023",
        duration: "4 months during free times",
        description: "We had to choose a research subject, and I chose neural networks, more particularly, <b>RTNEAT (real-time NeuroEvolution of Augmenting Topologies)</b>. I used Unity and did some <b>custom editor scripting</b> so I could watch my neural networks directly in the editor while the simulation is playing. The simulation consists of agents that can eat and reproduce; their neural networks can evolve randomly upon birth, and then <b>natural selection</b> will play a significant role, thus forming an ecosystem.",
        images: [
            "ECOAI_picture_01.png",
            "ECOAI_picture_02.png",
            "ECOAI_demo_01.gif",
            "ECOAI_demo_02.gif",
            "ECOAI_neuralNetworks.gif",
            "ECOAI_editor.png",
        ],
    },
    {
        name: "CaveMushroom",
        cover: "CaveMushroom.png",
        teammates: 0,
        tags:
            [
                {
                    name: "Game",
                    color: "#d44646",
                    tooltip: "One-level 3D platformer"
                },
                {
                    name: "UE4",
                    color: "#3930b3",
                    tooltip: "Made with Unreal Engine 4"
                },
                {
                    name: "Blueprint",
                    color: "#db773d",
                    tooltip: "Coded with blueprints"
                },
                {
                    name: "Blender",
                    color: "#158a4b",
                    tooltip: "Handmade 3D Assets with Blender"
                },
            ],
        date: "October 2021",
        duration: "2 weeks",
        description: "This is my first school project on Unreal Engine 4. I was alone on this work. Because it was my first school project on Unreal Engine, I had to only use blueprints, so I also found the time to <b>create all the 3D assets using Blender</b>. This game is a one-level 3D platformer in which you play as a little mushroom. Your goal is to reach the beautiful blossom tree at the top of the cave!",
        images: [
            "CAVEMUSHROOM_picture_01.png",
            "CAVEMUSHROOM_picture_02.png",
            "CAVEMUSHROOM_picture_03.png",
            "CAVEMUSHROOM_picture_04.png",
        ],
        itchio_link: "https://noe-mouchel.itch.io/cavemushroom"
    },
    {
        name: "Skadaï",
        cover: "SKADAI.png",
        teammates: 2,
        tags:
            [
                {
                    name: "Research",
                    color: "#d44646",
                    tooltip: "This is a research project"
                },
                {
                    name: "Unity",
                    color: "#3930b3",
                    tooltip: "Made with Unity"
                },
                {
                    name: "C#",
                    color: "#db773d",
                    tooltip: "Coded with C# language"
                },
                {
                    name: "AI",
                    color: "#3b4fd1",
                    tooltip: "Squad system and utility system"
                },
            ],
        date: "November 2022 - December 2022",
        duration: "1 month",
        description: "In this project, we implemented a <b>utility system</b> and a <b>squad system</b> to manage unit positions. I implemented the different functions for the AI units, and then I added communication management between units in the same squad. I also handled all the juiciness effects. In this project, the player controls one unit supported by AI teammates. There are 3 classes, each with different behaviors: 1 support (with a shield), 1 healer, and 1 shooter. We were given the opportunity to present this project at the <b>CNAM conference (Conservatoire National des Arts et Métiers)</b> on <b>AIs</b> on January 12th, 2023.",
        images: [
            "SKADAI_picture_01.png",
            "SKADAI_picture_02.png",
            "SKADAI_demo_01.gif",
            "SKADAI_demo_02.gif",
            "SKADAI_demo_03.gif",
        ],
        github_link: "https://github.com/Skadaii/skadai",
    },
    {
        name: "Hydrill",
        cover: "Hydrill.png",
        teammates: 2,
        tags:
            [
                {
                    name: "GameEngine",
                    color: "#d44646",
                    tooltip: "Handmade game engine"
                },
                {
                    name: "C++",
                    color: "#db773d",
                    tooltip: "Used language"
                },
                {
                    name: "OpenGL",
                    color: "#3d74db",
                    tooltip: "A cross-language, cross-platform application programming interface (API)<br/> for rendering 2D and 3D vector graphics"
                },
                {
                    name: "ImGui",
                    color: "#b314a5",
                    tooltip: "A graphical user interface library for C++"
                },
            ],
        date: "February 2022 - June 2022",
        duration: "5 months",
        description: "This Game Engine was made from scratch with C++, OpenGL, and other libraries. I made all <b>editor features</b> and the user <b>interface design</b> using ImGui. The <b>render engine</b> was also developed by me, and it supports <b>PBR materials</b> and <b>shadows from all types of lights</b>. Then I created <b>our own particle system</b>.",
        images: [
            "HYDRILL_EditorPreview_01.png",
            "HYDRILL_EditorPreview_02.png",
            "HYDRILL_PBR.png",
            "HYDRILL_shadows.png",
            "HYDRILL_particles_01.gif",
            "HYDRILL_particles_02.gif"
        ],
        github_link: "https://github.com/saslegrand/HydrillEngine",
    },
    {
        name: "Crowd Buster",
        cover: "CrowdBuster.png",
        teammates: 9,
        tags:
            [
                {
                    name: "Game",
                    color: "#d44646",
                    tooltip: "Stress gestion game"
                },
                {
                    name: "Unity",
                    color: "#3930b3",
                    tooltip: "Made with Unity"
                },
                {
                    name: "C#",
                    color: "#db773d",
                    tooltip: "Coded with C# language"
                },
            ],
        "tool": "Unity",
        date: "September 2022 - One week",
        duration: "4 days",
        description: "The peculiarity of this game is that it was made during <b>4 days</b> during a 'Game week' at school. We were a <b>multidisciplinary</b> team composed of game designers, game programmers, game artists, and sound designers. I handled the camera movement, building tools, and the user interface.",
        images: [
            "CROWDBUSTER_menu.png",
            "CROWDBUSTER_gameplay_01.gif",
            "CROWDBUSTER_gameplay_02.gif",
            "CROWDBUSTER_endgame.png",
        ],
        itchio_link: "https://rayane-tadjer.itch.io/crowd-buster"
    },
];



export default projects;