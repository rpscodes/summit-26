// Catalog items data
const catalogData = [
    {
        id: 1,
        title: "Kaoto - The Integration Designer for Red Hat Build of Apache Camel",
        category: "Integration",
        contentType: "arcade",
        imageUrl: "images/camel_rb.png",
        link: "https://www.redhat.com/architect/portfolio/detail/75-kaoto-apache-camel-integration-designer-demo"
    },
    {
        id: 2,
        title: "Event Streaming and Real Time Data Processing with Apache Kafka",
        category: "Messaging & Data Streaming",
        contentType: "arcade",
        imageUrl: "images/kafka_rb.png",
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
        contentType: "video",
        imageUrl: "images/runtimes_rb.png",
        link: "https://drive.google.com/file/d/1P600hWUZrRi4yFd9Zw1is5Yk_NUnNEtE/view"
    },
    {
        id: 6,
        title: "Red Hat Connectivity Link Technical Overview",
        category: "Application Connectivity",
        contentType: "slides",
        imageUrl: "images/RHCL_rb.png",
        link: "https://docs.google.com/presentation/d/1KOJeQhhzo-Nie8ESRfp6SqQGz5oZrXi8Xy-ahLK466U/edit#slide=id.g547716335e_0_220"
    },
    {
        id: 7,
        title: "Extending Red Hat Connectivity Link to non Kubernetes environments with Red Hat Service Interconnect",
        category: "Application Connectivity",
        contentType: "video",
        imageUrl: "images/rhsi_rb.png",
        link: "https://drive.google.com/file/d/1tVKPx8po55A0Al4BjZtQROo_DmqFveTE/view?usp=drive_link"
    },
    {
        id: 8,
        title: "Quarkus Developer Productivity Features",
        category: "Runtimes",
        contentType: "video",
        imageUrl: "images/runtimes_rb.png",
        link: "https://www.youtube.com/playlist?list=PLoQ0Ba0OL3iuwy2Bw3AkJbErcVOyufMF4"
    },
    {
        id: 9,
        title: "Creating Your First Quarkus App",
        category: "Runtimes",
        contentType: "video",
        imageUrl: "images/runtimes_rb.png",
        link: "https://youtu.be/WXzvg94Jy0s?si=1ohJB-0yFLNJlzgo"
    },
    {
        id: 10,
        title: "AI for Java Application Developers (Quarkus & LangChain4j)",
        category: "Runtimes",
        contentType: "video",
        imageUrl: "images/runtimes_rb.png",
        link: "https://www.redhat.com"
    },
    {
        id: 11,
        title: "Connect LLMs to the world with Red Hat build of Apache Camel",
        category: "Integration",
        contentType: "arcade",
        imageUrl: "images/camel_rb.png",
        link: "https://interact.redhat.com/share/ahGKXu7HfZ3HcbXXM3SQ"
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
        title: "Red Hat Application Foundations Customer Deck",
        category: "Application Foundations",
        contentType: "slides",
        imageUrl: "images/runtimes_rb.png",
        link: "https://docs.google.com/presentation/d/1BGjhQVI16iYtQfsGdoX3VAZLOPUBJgla0clfxR38LrU/edit?slide=id.g31b831aad22_0_2829#slide=id.g31b831aad22_0_2829"
    },
    {
        id: 14,
        title: "Red Hat Application Foundations Technical Deck",
        category: "Application Foundations",
        contentType: "slides",
        imageUrl: "images/runtimes_rb.png",
        link: "https://docs.google.com/presentation/d/14vbEh5fuDFlDDGDObm9lXBQyIzY-sJRU_Nf_144MQ0w/edit?slide=id.g6b8a41c33d_0_0#slide=id.g6b8a41c33d_0_0"
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
        title: "Red Hat Application Foundations Subscription Guide",
        category: "Application Foundations",
        contentType: "webpage",
        imageUrl: "images/runtimes_rb.png",
        link: "https://www.redhat.com/en/resources/application-services-subscription-guide-detail?extIdCarryOver=true&intcmp=7013a000003SwrYAAS&sc_cid=701f2000001Css0AAC"
    },
    {
        id: 17,
        title: "Modernizing Jakarta EE: Slim, Fast Deployments with JBoss EAP",
        category: "Runtimes",
        contentType: "arcade",
        imageUrl: "images/runtimes_rb.png",
        link: "https://interact.redhat.com/share/eZeOugd4XaljCop0Ie0B"
    },
    {
        id: 18,
        title: "Minimize downtime when migrating your applications from VMware to OpenShift Virtualization, with Red Hat Service Interconnect",
        category: "Application Connectivity",
        contentType: "arcade",
        imageUrl: "images/rhsi_rb.png",
        link: "https://interact.redhat.com/share/VHFnz8T9tha8OQEvKBie"
    }
]; 
