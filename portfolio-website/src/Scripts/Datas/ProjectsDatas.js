const projects = [
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
        description: "This Game Engine was made from scratch with C++, OpenGL and other libraries. I made all <b>editor features</b> and the user <b>interface design</b> using ImGui. The <b>render engine</b> was also developped by me and it support <b>PBR materials</b> and <b>shadows from all type of lights</b>. Then I created <b>our own particle system</b>.",
        images: [
            "HYDRILL_EditorPreview_01.png",
            "HYDRILL_EditorPreview_02.png",
            "HYDRILL_PBR.png",
            "HYDRILL_shadows.png",
            "HYDRILL_particles_01.gif",
            "HYDRILL_particles_02.gif"
        ],
        github_link: "https://github.com/saslegrand/HydrillEngine",
        itchio_link: ""
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
        description: "This is my first school project on Unreal Engine 4, I was alone on this work. Because it was our first school project on unreal engine we had to only use blueprint so I also found the time to <b>make all the 3D assets on blender</b>. This game is a one level 3D platformer in which you play as a little mushroom, your goal is to reach the beautiful blossom tree at the top of the cave !",
        images: [
            "CAVEMUSHROOM_picture_01.png",
            "CAVEMUSHROOM_picture_02.png",
            "CAVEMUSHROOM_picture_03.png",
            "CAVEMUSHROOM_picture_04.png",
        ],
        itchio_link: "https://noe-mouchel.itch.io/cavemushroom"
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
                    tooltip: "Coded with C-sharp language"
                },
            ],
        "tool": "Unity",
        date: "September 2022 - One weeks",
        duration: "4 days",
        description: "The particularity of this game is that it was made during <b>4 days</b> during a 'Game week' at school, we were a <b>multidisciplinary</b> team which was composed of game designer, game programmer, game artist and sound designer. I made the camera movement, the building tools and the user interface.",
        images: [
            "CROWDBUSTER_menu.png",
            "CROWDBUSTER_gameplay_01.gif",
            "CROWDBUSTER_gameplay_02.gif",
            "CROWDBUSTER_endgame.png",
        ],
        itchio_link: "https://rayane-tadjer.itch.io/crowd-buster"
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
                    tooltip: "Made with unity"
                },
                {
                    name: "C#",
                    color: "#db773d",
                    tooltip: "Coded with C-sharp language"
                },
                {
                    name: "AI",
                    color: "#3b4fd1",
                    tooltip: "Neural networks"
                },
            ],
        date: "March 2023 - June 2023",
        duration: "4 months during free times",
        description: "We had to choose a research subject and I chose neural networks and more particularly, <b>RTNEAT (real-time NeuroEvolution of Augmenting Topologies)</b>. I used unity and did some <b>custom editor scripting</b> so I could watch my neural networks directly on the editor while the simulation is playing. The simulation is just agents that can eat and reproduce, their neural networks can evolve randomly at birth then the <b>natural selection</b> will do most of the work, thus an ecosystem takes shape.",
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
                    tooltip: "Made with unity"
                },
                {
                    name: "C#",
                    color: "#db773d",
                    tooltip: "Coded with C-sharp language"
                },
                {
                    name: "AI",
                    color: "#3b4fd1",
                    tooltip: "Squad system and utility system"
                },
            ],
        date: "November 2022 - December 2022",
        duration: "1 months",
        description: "In this project we implemented a <b>utility system</b> and a <b>squad system</b> to manage units positions, I implemented the differents functions for the AI units, then I added the communication management between units in the same squad, I also did all the juiciness effects. In this project the player controls one units which is supported by his AI teammates. There are 3 classes and so 3 differents behaviours, 1 support (with shield), 1 healer and 1 shooter. We were given the opportunity to present this project at the <b>CNAM conference (Conservatoire National des Arts et Métiers)</b> on <b>AIs</b> on january 12th 2023.",
        images: [
            "SKADAI_picture_01.png",
            "SKADAI_picture_02.png",
            "SKADAI_demo_01.gif",
            "SKADAI_demo_02.gif",
            "SKADAI_demo_03.gif",
        ],
        github_link: "https://github.com/Skadaii/skadai",
        itchio_link: ""
    },
];


export default projects;