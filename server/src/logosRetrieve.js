
const webURL = "/uploads/"
const icons = `aarch64 adonisjs aftereffects AWS akka algolia alpinejs anaconda android androidstudio angular angularjs angularmaterial ansible antdesign apache apacheairflow apachekafka apachespark apl appcelerator apple appwrite archlinux arduino argocd astro atom azure azuredevops azuresqldatabase babel backbonejs ballerina bamboo bash beats behance bitbucket blazor blender bootstrap bower browserstack bun c cairo cakephp canva capacitor carbon cassandra centos ceylon chrome clarity clion clojure clojurescript cloudflare cloudflareworkers cmake codeac codepen coffeescript composer confluence consul contao corejs cosmosdb couchbase couchdb cplusplus crystal csharp css cypressio d3js dart datagrip dataspell 
dbeaver debian denojs devicon digitalocean discordjs djangorest docker doctrine dot-net dotnetcore dreamweaver dropwizard drupal dynamodb eclipse ecto elasticsearch electron eleventy elixir elm emacs embeddedc ember envoy erlang eslint express facebook fastapi fastify faunadb feathersjs fedora figma filezilla firebase firefox flask flutter fortran foundation framermotion framework7 fsharp gatling gatsby gazebo gcc gentoo ghost gimp git gitbook github githubactions githubcodespaces gitlab gitpod go godot goland google googlecloud gradle grafana grails groovy grpc grunt hadoop handlebars hardhat harvester haskell haxe helm heroku hibernate homebrew html hugo ie10 ifttt influxdb inkscape insomnia intellij ionic jaegertracing jamstack jasmine java javascript jeet jekyll jenkins jetbrains jetpackcompose jira jiraalign jquery json jule julia junit jupyter k3os k3s k6 kaggle karatelabs karma kdeneon keras kibana knexjs kotlin krakenjs ktor kubernetes labview laravel latex linkedin linux liquibase livewire llvm lodash logstash lua lumen magento mariadb markdown materializecss materialui matlab matplotlib maven maya meteor microsoftsqlserver minitab mithril mobx mocha modx moleculer mongodb mongoose moodle msdos mysql nano neo4j neovim nestjs netlify networkx nextjs nginx ngrx nhibernate nim nimble nixos nodejs nodemon nodewebkit nomad norg notion nuget numpy nuxtjs oauth ocaml ohmyzsh okta openal openapi opencl opencv opengl openstack opensuse opentelemetry opera oracle ory p5js packer pandas perl pfsense phalcon phoenix 
photonengine photoshop php phpstorm playwright plotly pnpm podman poetry polygon portainer postcss postgresql postman powershell premierepro prisma processing prolog prometheus protractor pulsar pulumi puppeteer purescript putty pycharm pypi pytest python pytorch qodana qt quarkus quasar qwik r rabbitmq railway rancher raspberrypi reach react reactbootstrap reactnavigation reactrouter readthedocs realm rect redhat redis redux renpy replit rider rocksdb rockylinux rollup ros rspec rstudio ruby rubymine rust rxjs safari salesforce sanity sass scala scalingo scikitlearn sdl selenium sema sentry sequelize shopware shotgrid sketch slack socketio solidity solidjs sonarqube sourcetree spack spring 
spss spyder sqlalchemy sqldeveloper sqlite ssh stackoverflow storybook streamlit stylus subversion supabase svelte swagger swift swiper symfony tailwindcss tauri tensorflow terraform tex thealgorithms threedsmax threejs titaniumsdk tomcat tortoisegit towergit traefikmesh traefikproxy travis trello trpc twitter typescript typo3 ubuntu unifiedmodelinglanguage unity unix unrealengine uwsgi v8 vagrant vala vault vercel vertx vim visualbasic visualstudio vite vitejs vitess vitest vscode vsphere vuejs vuestorefront vuetify vyper wasm webflow weblate webpack webstorm windows11 windows8 woocommerce wordpress xamarin xcode xd xml yaml yarn yii yugabytedb yunohost zend zig`


var response = `**Possible Technical Stack:**

**Backend:**

* **Language:** Python or Node.js for server-side programming
* **Framework:** Django or Flask for web development
* **Database:** MongoDB or PostgreSQL for data storage
* **AI Framework:** OpenAI API or Hugging Face Transformers for generative AI capabilities

**Frontend:**

* **Language:** HTML, CSS, JavaScript
* **Framework:** React or Vue.js for interactive user interfaces
* **API:** Axios or Fetch for communication with the backend

**Architecture:**

* **Microservices:** Decouple different functionalities into separate microservices (e.g., text generation, candidate selection)
* **Message Queuing:** Implement message queuing (e.g., Kafka or RabbitMQ) for asynchronous communication between microservices
* **Caching:** Utilize caching mechanisms (e.g., Redis) to improve response times and reduce load on the database
* **Load Balancing:** Implement load balancing techniques (e.g., Nginx) to distribute traffic and ensure scalability
* **Monitoring and Error Handling:** Integrate monitoring tools (e.g., Prometheus or Sentry) to monitor system performance and handle errors effectively

**Scalability and Growth:**

* **Horizontal Scaling:** Use auto-scaling techniques to spin up additional backend instances as needed
* **Caching and CDN:** Implement caching and a content delivery network (CDN) to improve performance and reduce load on the origin server   
* **Optimized Database Design:** Optimize database schema and indexing for efficient data retrieval and storage
* **Data Sharding:** Partition large datasets into smaller, manageable shards to improve performance

**Real-Time Interactions:**

* **WebSockets:** Utilize WebSockets for bi-directional real-time communication between the frontend and backend
* **Server-Sent Events:** Implement server-sent events to push updates from the backend to the frontend in a real-time manner
* **Optimized Event Handling:** Use efficient event handling mechanisms on both the frontend and backend to minimize latency`

async function get_logo_names(response) {
    console.log(response)
    if (typeof response !== 'string') {
        console.error('Error: Invalid response type. Expected string.');
        return []; // Return empty array or handle appropriately
    }

    async function findCommonWords(str1, str2) {
        const words1 = str1.toLowerCase().match(/\w+/g) || [];
        const words2 = str2.toLowerCase().match(/\w+/g) || [];
        const set1 = new Set(words1);
        const commonWords = [...new Set(words2.filter(word => set1.has(word)))];
        return commonWords;
    }

    try {
        const commonWords = await findCommonWords(icons, response);

        const webURL = "/uploads/";
        const svgUrls = commonWords.map(word => `${webURL}${word}.svg`);
        return svgUrls;
    } catch (error) {
        console.error('Error in get_logo_names:', error);
        return []; // Return empty array or handle error condition
    }
}

module.exports = { get_logo_names };

