// Catalog items data
const catalogData = [
    {
        id: 1,
        title: "Enterprise Java design patterns in the cloud-native era",
        category: "Runtimes",
        contentType: "webpage",
        imageUrl: "images/runtimes_rb.png",
        link: "https://www.redhat.com/en/engage/oreilly-java-patterns-cloud"
    },
    {
        id: 2,
        title: "Red Hat's Hybrid Java Strategy",
        category: "Runtimes",
        contentType: "slides",
        imageUrl: "images/runtimes_rb.png",
        link: "https://interact.redhat.com/share/pYiQKLDlRICTtqM3G8Mw"
    },
    {
        id: 3,
        title: "Java Modernization Paths",
        category: "Runtimes",
        contentType: "slides",
        imageUrl: "images/runtimes_rb.png",
        link: "https://docs.google.com/presentation/d/18WhskOBk9goOlSpR0yNHlFMYkmdexmnB-HJrK7ObDlM/edit#slide=id.g2d2206166c3_0_2129"
    },
    {
        id: 4,
        title: "EAP 7 to 8 Migration",
        category: "Runtimes",
        contentType: "slides",
        imageUrl: "images/runtimes_rb.png",
        link: "https://drive.google.com/file/d/1P600hWUZrRi4yFd9Zw1is5Yk_NUnNEtE/view"
    },
    {
        id: 5,
        title: "EAP on OpenShift",
        category: "Runtimes",
        contentType: "slides",
        imageUrl: "images/runtimes_rb.png",
        link: "https://docs.google.com/presentation/d/1lM7eR4-8M-OW2ENNOcB_mmkbs7Rfbf5uopgh1C2ca94/edit?usp=sharing"
    },
    {
        id: 6,
        title: "Quarkus Developer Productivity Features",
        category: "Runtimes",
        contentType: "video",
        imageUrl: "images/runtimes_rb.png",
        link: "https://www.youtube.com/playlist?list=PLoQ0Ba0OL3iuwy2Bw3AkJbErcVOyufMF4"
    },
    {
        id: 7,
        title: "Creating Your First Quarkus App",
        category: "Runtimes",
        contentType: "demo",
        imageUrl: "images/runtimes_rb.png",
        link: "https://developers.redhat.com/learn/openshift/build-and-deploy-quarkus-application-openshift-minutes"
    },
    {
        id: 8,
        title: "AI for Java Application Developers (Quarkus & LangChain4j)",
        category: "Runtimes",
        contentType: "webpage",
        imageUrl: "images/runtimes_rb.png",
        link: "https://quarkus.io/ai/"
    },
    {
        id: 9,
        title: "Quarkus for Spring Boot Developers",
        category: "Runtimes",
        contentType: "webpage",
        imageUrl: "images/runtimes_rb.png",
        link: "https://developers.redhat.com/products/quarkus/spring-developers"
    },
    {
        id: 10,
        title: "Camel, Kaoto, Mapper, AI",
        category: "Application Foundations",
        contentType: "arcade",
        imageUrl: "images/runtimes_rb.png",
        link: "https://www.redhat.com/architect/portfolio/detail/75-kaoto-apache-camel-integration-designer-demo"
    },
    {
        id: 11,
        title: "Red Hat Application Foundations Customer Deck",
        category: "Application Foundations",
        contentType: "slides",
        imageUrl: "images/runtimes_rb.png",
        link: "https://docs.google.com/presentation/d/1BGjhQVI16iYtQfsGdoX3VAZLOPUBJgla0clfxR38LrU/edit?slide=id.g31b831aad22_0_2829#slide=id.g31b831aad22_0_2829"
    },
    {
        id: 12,
        title: "Red Hat Service Interconnect Customer Deck",
        category: "Application Connectivity",
        contentType: "slides",
        imageUrl: "images/rhsi_rb.png",
        link: "https://interact.redhat.com/share/ahGKXu7HfZ3HcbXXM3SQ"
    },
    {
        id: 13,
        title: "Event Streaming and Real Time Data Processing with Red Hat streams for Apache Kafka",
        category: "Application Foundations",
        contentType: "demo",
        imageUrl: "images/kafka_rb.png",
        link: "https://interact.redhat.com/share/pYiQKLDlRICTtqM3G8Mw"
    },
    {
        id: 14,
        title: "Red Hat Application Foundations Technical Deck",
        category: "Application Foundations",
        contentType: "slides",
        imageUrl: "images/runtimes_rb.png",
        link: "https://docs.google.com/presentation/d/14vbEh5fuDFlDDGDObm9lXBQyIzY-sJRU_Nf_144MQ0w/edit?slide=id.g898ed3b7e3_11_0#slide=id.g898ed3b7e3_11_0"
    },
    {
        id: 15,
        title: "Red Hat Application Foundations Datasheet",
        category: "Application Foundations",
        contentType: "webpage",
        imageUrl: "images/runtimes_rb.png",
        link: "https://www.redhat.com/en/resources/application-foundations-datasheet"
    },
    {
        id: 16,
        title: "Event Streaming and Real Time Data Processing",
        category: "Application Foundations",
        contentType: "arcade",
        imageUrl: "images/runtimes_rb.png",
        link: "https://interact.redhat.com/share/pYiQKLDlRICTtqM3G8Mw"
    },
    {
        id: 17,
        title: "Connect LLMs to the world with Red Hat build of Apache Camel",
        category: "Application Foundations",
        contentType: "arcade",
        imageUrl: "images/camel_rb.png",
        link: "https://interact.redhat.com/share/ahGKXu7HfZ3HcbXXM3SQ"
    },
    {
        id: 18,
        title: "Getting Started with Quarkus",
        category: "Runtimes",
        contentType: "demo",
        imageUrl: "images/runtimes_rb.png",
        link: "https://developers.redhat.com/courses/quarkus/getting-started"
    },
    {
        id: 19,
        title: "Red Hat build of Apache Camel",
        category: "Application Foundations",
        contentType: "blog",
        imageUrl: "images/camel_rb.png",
        link: "https://developers.redhat.com/products/red-hat-build-of-apache-camel"
    },
    {
        id: 20,
        title: "Overview streams for Apache Kafka",
        category: "Application Foundations",
        contentType: "slides",
        imageUrl: "images/kafka_rb.png",
        link: "https://docs.google.com/presentation/d/1GSiQPe7EYBlgxMC1bQDESaMZRYSAB7Ab8tyBCJ-Fxnk/edit#slide=id.gba6d05b224_0_770"
    },
    {
        id: 21,
        title: "Keycloak Overview Deck",
        category: "Application Foundations",
        contentType: "slides",
        imageUrl: "images/runtimes_rb.png",
        link: "https://docs.google.com/presentation/d/1DdSpwvXONsJsDZ62xAmFK5-vPnZy5LPe8rBD8MSLvRE/edit?slide=id.ge917b646ac_0_4446#slide=id.ge917b646ac_0_4446"
    }
]; 
