// const ScrollArrow = () => (
//   <button className="tech-scroll-arrow" aria-label="Scroll up">
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   </button>
// );

// const BrowserWindow = ({ children, aos }: { children: React.ReactNode; aos?: string }) => (
//   <div className="technologies-grid-section" {...(aos ? { "data-aos": aos } : {})}>
//     <div className="browser-window">
//       <div className="browser-header">
//         <div className="browser-dots">
//           <span className="dot dot-red"></span>
//           <span className="dot dot-yellow"></span>
//           <span className="dot dot-green"></span>
//         </div>
//         <div className="browser-menu">
//           <span className="menu-dot"></span>
//           <span className="menu-dot"></span>
//           <span className="menu-dot"></span>
//         </div>
//       </div>
//       {children}
//     </div>
//   </div>
// );

// const TechTab = ({
//   id,
//   active,
//   logos,
//   gridAos,
//   browserAos,
// }: {
//   id: string;
//   active?: boolean;
//   logos: { src: string; alt: string }[];
//   gridAos?: string;
//   browserAos?: string;
// }) => (
//   <div className={`technologies-content${active ? " active" : ""}`} id={id}>
//     <div className="technologies-layout">
//       <div className="technologies-image-section">
//         <img src="/images/technologies_we_work_with/devloper_working_img.png" alt="Developer Working" className="tech-developer-img" />
//       </div>
//       <BrowserWindow aos={browserAos}>
//         <div className="tech-logos-grid" {...(gridAos ? { "data-aos": gridAos } : {})}>
//           {logos.map((l, i) => (
//             <div className="tech-logo-item" key={i}>
//               <img src={l.src} alt={l.alt} />
//             </div>
//           ))}
//         </div>
//       </BrowserWindow>
//     </div>
//     <ScrollArrow />
//   </div>
// );

// const tabs = [
//   { id: "web", icon: "🌐", label: "Web", active: true },
//   { id: "mobile", icon: "📱", label: "Mobile" },
//   { id: "devops", icon: "⚙️", label: "DevOps" },
//   { id: "platforms", icon: "🔧", label: "Platforms" },
//   { id: "databases", icon: "🗄️", label: "Relational Database" },
//   { id: "bigdata", icon: "📊", label: "Bigdata" },
//   { id: "automation", icon: "🤖", label: "Automation tools" },
//   { id: "machinelearning", icon: "🧠", label: "Machine Learning" },
//   { id: "security", icon: "🔒", label: "Information security" },
//   { id: "cloud", icon: "☁️", label: "Cloud" },
// ];

// const p = "/images/home/tech-logos/";
// const b = "/images/home/tech/backend/";
// const f = "/images/home/tech/frontend/";

// const techData: Record<string, { src: string; alt: string }[]> = {
//   web: [
//     { src: `${b}Link.png`, alt: "Rails" }, { src: `${b}Link1.png`, alt: "Node.js" },
//     { src: `${b}Link2.png`, alt: "Python" }, { src: `${b}Link3.png`, alt: "Go" },
//     { src: `${b}Link4.png`, alt: "Microsoft .NET" }, { src: `${f}Angular.png`, alt: "Angular" },
//     { src: `${f}React.png`, alt: "React" }, { src: `${f}Vuejs.png`, alt: "Vue.js" },
//     { src: `${f}JavaScript.png`, alt: "JavaScript" }, { src: `${f}Html5.png`, alt: "HTML5" },
//   ],
//   mobile: [
//     { src: `${p}reactnative.webp`, alt: "React Native" }, { src: `${p}flutter.webp`, alt: "Flutter" },
//     { src: `${p}ios.webp`, alt: "iOS" }, { src: `${p}android.webp`, alt: "Android" },
//     { src: `${p}xamarin.webp`, alt: "Xamarin" }, { src: `${p}pwa.webp`, alt: "PWA" },
//   ],
//   devops: [
//     { src: `${p}docker.webp`, alt: "Docker" }, { src: `${p}kubernetes.webp`, alt: "Kubernetes" },
//     { src: `${p}openshift.webp`, alt: "OpenShift" }, { src: `${p}mesos.webp`, alt: "Mesos" },
//     { src: `${p}ansible.webp`, alt: "Ansible" }, { src: `${p}puppet.webp`, alt: "Puppet" },
//     { src: `${p}caffe.webp`, alt: "Caffe" }, { src: `${p}saltstack.webp`, alt: "SaltStack" },
//     { src: `${p}terraform.webp`, alt: "Terraform" }, { src: `${p}packer.webp`, alt: "Packer" },
//     { src: `${p}aws developer tools.webp`, alt: "AWS Developer Tools" },
//     { src: `${p}azure devops.webp`, alt: "Azure DevOps" },
//     { src: `${p}google developer tools.webp`, alt: "Google Developer Tools" },
//     { src: `${p}ci co.webp`, alt: "CI/CD" }, { src: `${p}jenkins.webp`, alt: "Jenkins" },
//     { src: `${p}tc.webp`, alt: "TeamCity" }, { src: `${p}zabbix.webp`, alt: "Zabbix" },
//     { src: `${p}elasticsearch.webp`, alt: "Elasticsearch" },
//     { src: `${p}prometheus.webp`, alt: "Prometheus" }, { src: `${p}grafana.webp`, alt: "Grafana" },
//     { src: `${p}datadog.webp`, alt: "Datadog" },
//   ],
//   platforms: [
//     { src: `${p}dynamics365.webp`, alt: "Dynamics 365" }, { src: `${p}salesforce.webp`, alt: "Salesforce" },
//     { src: `${p}adobe commerce.webp`, alt: "Adobe Commerce" },
//     { src: `${p}share point.webp`, alt: "SharePoint" }, { src: `${p}servicenow.webp`, alt: "ServiceNow" },
//   ],
//   databases: [
//     { src: `${p}sqlserver.webp`, alt: "SQL Server" }, { src: `${p}mysql.webp`, alt: "MySQL" },
//     { src: `${p}oracle.webp`, alt: "Oracle" }, { src: `${p}postgresql.webp`, alt: "PostgreSQL" },
//     { src: `${p}azure synapse analytics.webp`, alt: "Azure Synapse Analytics" },
//     { src: `${p}azure sql database.webp`, alt: "Azure SQL Database" },
//     { src: `${p}amazon RDS.webp`, alt: "Amazon RDS" }, { src: `${p}amazon S3.webp`, alt: "Amazon S3" },
//     { src: `${p}google cloud Sql.webp`, alt: "Google Cloud SQL" },
//   ],
//   bigdata: [
//     { src: `${p}hadoop.webp`, alt: "Hadoop" }, { src: `${p}spark.webp`, alt: "Spark" },
//     { src: `${p}cassandra.webp`, alt: "Cassandra" }, { src: `${p}kafka.webp`, alt: "Kafka" },
//     { src: `${p}hive.webp`, alt: "Hive" }, { src: `${p}zookeeper.webp`, alt: "Zookeeper" },
//     { src: `${p}apache HBASE.webp`, alt: "Apache HBase" },
//     { src: `${p}azure cosmes DB.webp`, alt: "Azure Cosmos DB" },
//     { src: `${p}zure blob storage.webp`, alt: "Azure Blob Storage" },
//     { src: `${p}azure data lake.webp`, alt: "Azure Data Lake" },
//     { src: `${p}amazon dynamoDB.webp`, alt: "Amazon DynamoDB" },
//     { src: `${p}amazon documentDB.webp`, alt: "Amazon DocumentDB" },
//     { src: `${p}aws elasticache.webp`, alt: "AWS ElastiCache" },
//     { src: `${p}mongoDB.webp`, alt: "MongoDB" },
//     { src: `${p}google cloud datastore.webp`, alt: "Google Cloud Datastore" },
//   ],
//   machinelearning: [
//     { src: `${p}matlab.webp`, alt: "MATLAB" }, { src: `${p}octave.webp`, alt: "Octave" },
//     { src: `${p}r.webp`, alt: "R" }, { src: `${p}mahout.webp`, alt: "Mahout" },
//     { src: `${p}caffe.webp`, alt: "Caffe" }, { src: `${p}mxnet.webp`, alt: "MXNet" },
//     { src: `${p}tensorflow.webp`, alt: "TensorFlow" }, { src: `${p}keras.webp`, alt: "Keras" },
//     { src: `${p}torch.webp`, alt: "Torch" }, { src: `${p}openCV.webp`, alt: "OpenCV" },
//     { src: `${p}theano.webp`, alt: "Theano" }, { src: `${p}spark.webp`, alt: "Spark" },
//     { src: `${p}scikit learn.webp`, alt: "Scikit-learn" }, { src: `${p}gensim.webp`, alt: "Gensim" },
//     { src: `${p}spacy.webp`, alt: "spaCy" },
//     { src: `${p}amazon machine learning.webp`, alt: "Amazon Machine Learning" },
//     { src: `${p}amazon sagemaker.webp`, alt: "Amazon SageMaker" },
//     { src: `${p}azure machine learning.webp`, alt: "Azure Machine Learning" },
//     { src: `${p}google cloud ai platform.webp`, alt: "Google Cloud AI Platform" },
//   ],
//   automation: [
//     { src: `${p}se.webp`, alt: "Selenium" }, { src: `${p}appium.webp`, alt: "Appium" },
//     { src: `${p}protractor.webp`, alt: "Protractor" }, { src: `${p}fmbt.webp`, alt: "FMBT" },
//     { src: `${p}xctest.webp`, alt: "XCTest" },
//     { src: `${p}teststackwhite.webp`, alt: "TestStack White" },
//     { src: `${p}cuit.webp`, alt: "CUIT" }, { src: `${p}ranorex.webp`, alt: "Ranorex" },
//     { src: `${p}postman.webp`, alt: "Postman" },
//     { src: `${p}apache jmeter.webp`, alt: "Apache JMeter" },
//     { src: `${p}unified functional testing.webp`, alt: "UFT" },
//   ],
//   security: [
//     { src: `${p}radar.webp`, alt: "Radar" }, { src: `${p}cloudflare.webp`, alt: "Cloudflare" },
//     { src: `${p}siege.webp`, alt: "Siege" }, { src: `${p}burpsuite.webp`, alt: "Burp Suite" },
//     { src: `${p}nessus.webp`, alt: "Nessus" }, { src: `${p}air.webp`, alt: "Air" },
//     { src: `${p}acunetix.webp`, alt: "Acunetix" }, { src: `${p}metasploit.webp`, alt: "Metasploit" },
//     { src: `${p}nmap.webp`, alt: "Nmap" }, { src: `${p}dirb.webp`, alt: "Dirb" },
//     { src: `${p}wireshark.webp`, alt: "Wireshark" }, { src: `${p}zmap.webp`, alt: "Zmap" },
//     { src: `${p}masscan.webp`, alt: "Masscan" },
//   ],
//   cloud: [
//     { src: `${p}aws.webp`, alt: "AWS" }, { src: `${p}digital ocean.webp`, alt: "Digital Ocean" },
//     { src: `${p}google cloud.webp`, alt: "Google Cloud" },
//     { src: `${p}microsoft azure.webp`, alt: "Microsoft Azure" },
//     { src: `${p}rockspace.webp`, alt: "Rackspace" },
//   ],
// };

// export default function TechnologiesSection() {
//   return (
//     <div className="technologies-container">
//       <p className="technologies-specialization">SPECIALIZATION</p>
//       <h3 className="technologies-container-header">Technologies We Work With</h3>

//       <div className="technologies-tabs">
//         {tabs.map((tab) => (
//           <button
//             className={`technologies-tab-button${tab.active ? " active" : ""}`}
//             data-tab={tab.id}
//             key={tab.id}
//           >
//             <span className="tab-icon">{tab.icon}</span> {tab.label}
//           </button>
//         ))}
//       </div>

//       {tabs.map((tab) => (
//         <TechTab
//           key={tab.id}
//           id={tab.id}
//           active={tab.active}
//           logos={techData[tab.id]}
//           browserAos={tab.id === "web" ? "fade-right" : undefined}
//           gridAos={tab.id === "mobile" ? "fade-right" : undefined}
//         />
//       ))}
//     </div>
//   );
// }




const p = "/images/home/tech-logos/";
const b = "/images/home/tech/backend/";
const f = "/images/home/tech/frontend/";

const techData: Record<string, { src: string; alt: string }[]> = {
  web: [
    { src: `${b}Link.png`, alt: "Rails" }, { src: `${b}Link1.png`, alt: "Node.js" },
    { src: `${b}Link2.png`, alt: "Python" }, { src: `${b}Link3.png`, alt: "Go" },
    { src: `${b}Link4.png`, alt: "Microsoft .NET" }, { src: `${f}Angular.png`, alt: "Angular" },
    { src: `${f}React.png`, alt: "React" }, { src: `${f}Vuejs.png`, alt: "Vue.js" },
    { src: `${f}JavaScript.png`, alt: "JavaScript" }, { src: `${f}Html5.png`, alt: "HTML5" },
  ],
  mobile: [
    { src: `${p}reactnative.webp`, alt: "React Native" }, { src: `${p}flutter.webp`, alt: "Flutter" },
    { src: `${p}ios.webp`, alt: "iOS" }, { src: `${p}android.webp`, alt: "Android" },
    { src: `${p}xamarin.webp`, alt: "Xamarin" }, { src: `${p}pwa.webp`, alt: "PWA" },
  ],
  devops: [
    { src: `${p}docker.webp`, alt: "Docker" }, { src: `${p}kubernetes.webp`, alt: "Kubernetes" },
    { src: `${p}openshift.webp`, alt: "OpenShift" }, { src: `${p}ansible.webp`, alt: "Ansible" },
    { src: `${p}terraform.webp`, alt: "Terraform" }, { src: `${p}jenkins.webp`, alt: "Jenkins" },
    { src: `${p}prometheus.webp`, alt: "Prometheus" }, { src: `${p}grafana.webp`, alt: "Grafana" },
    { src: `${p}datadog.webp`, alt: "Datadog" }, { src: `${p}elasticsearch.webp`, alt: "Elasticsearch" },
  ],
  platforms: [
    { src: `${p}dynamics365.webp`, alt: "Dynamics 365" }, { src: `${p}salesforce.webp`, alt: "Salesforce" },
    { src: `${p}adobe commerce.webp`, alt: "Adobe Commerce" }, { src: `${p}share point.webp`, alt: "SharePoint" },
    { src: `${p}servicenow.webp`, alt: "ServiceNow" },
  ],
  databases: [
    { src: `${p}sqlserver.webp`, alt: "SQL Server" }, { src: `${p}mysql.webp`, alt: "MySQL" },
    { src: `${p}oracle.webp`, alt: "Oracle" }, { src: `${p}postgresql.webp`, alt: "PostgreSQL" },
    { src: `${p}amazon RDS.webp`, alt: "Amazon RDS" }, { src: `${p}amazon S3.webp`, alt: "Amazon S3" },
    { src: `${p}google cloud Sql.webp`, alt: "Google Cloud SQL" }, { src: `${p}mongoDB.webp`, alt: "MongoDB" },
    { src: `${p}azure sql database.webp`, alt: "Azure SQL" }, { src: `${p}amazon dynamoDB.webp`, alt: "Amazon DynamoDB" },
  ],
  bigdata: [
    { src: `${p}hadoop.webp`, alt: "Hadoop" }, { src: `${p}spark.webp`, alt: "Spark" },
    { src: `${p}cassandra.webp`, alt: "Cassandra" }, { src: `${p}kafka.webp`, alt: "Kafka" },
    { src: `${p}hive.webp`, alt: "Hive" }, { src: `${p}mongoDB.webp`, alt: "MongoDB" },
    { src: `${p}amazon dynamoDB.webp`, alt: "Amazon DynamoDB" }, { src: `${p}amazon documentDB.webp`, alt: "Amazon DocumentDB" },
    { src: `${p}aws elasticache.webp`, alt: "AWS ElastiCache" }, { src: `${p}google cloud datastore.webp`, alt: "Google Cloud Datastore" },
  ],
  cloud: [
    { src: `${p}aws.webp`, alt: "AWS" }, { src: `${p}google cloud.webp`, alt: "Google Cloud" },
    { src: `${p}microsoft azure.webp`, alt: "Microsoft Azure" }, { src: `${p}digital ocean.webp`, alt: "Digital Ocean" },
    { src: `${p}rockspace.webp`, alt: "Rackspace" },
  ],
  automation: [
    { src: `${p}se.webp`, alt: "Selenium" }, { src: `${p}appium.webp`, alt: "Appium" },
    { src: `${p}postman.webp`, alt: "Postman" }, { src: `${p}apache jmeter.webp`, alt: "Apache JMeter" },
    { src: `${p}ranorex.webp`, alt: "Ranorex" }, { src: `${p}protractor.webp`, alt: "Protractor" },
  ],
  machinelearning: [
    { src: `${p}tensorflow.webp`, alt: "TensorFlow" }, { src: `${p}keras.webp`, alt: "Keras" },
    { src: `${p}openCV.webp`, alt: "OpenCV" }, { src: `${p}scikit learn.webp`, alt: "Scikit-learn" },
    { src: `${p}spark.webp`, alt: "Spark" }, { src: `${p}mxnet.webp`, alt: "MXNet" },
    { src: `${p}amazon sagemaker.webp`, alt: "Amazon SageMaker" }, { src: `${p}azure machine learning.webp`, alt: "Azure ML" },
    { src: `${p}google cloud ai platform.webp`, alt: "Google AI Platform" }, { src: `${p}theano.webp`, alt: "Theano" },
  ],
  security: [
    { src: `${p}cloudflare.webp`, alt: "Cloudflare" }, { src: `${p}burpsuite.webp`, alt: "Burp Suite" },
    { src: `${p}nessus.webp`, alt: "Nessus" }, { src: `${p}metasploit.webp`, alt: "Metasploit" },
    { src: `${p}nmap.webp`, alt: "Nmap" }, { src: `${p}wireshark.webp`, alt: "Wireshark" },
  ],
};

const tabs = [
  { id: "web",             label: "Web" },
  { id: "mobile",          label: "Mobile" },
  { id: "devops",          label: "DevOps" },
  { id: "platforms",       label: "Platforms" },
  { id: "databases",       label: "Relational Database" },
  { id: "bigdata",         label: "Bigdata" },
  { id: "cloud",           label: "Cloud" },
  { id: "automation",      label: "Automation tools" },
  { id: "machinelearning", label: "Machine Learning" },
  { id: "security",        label: "Information security" },
];

const tabIconPaths: Record<string, string> = {
  web:             "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  mobile:          "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
  devops:          "M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.3.07-.62.07-.92s-.03-.63-.07-1l2.04-1.64c.21-.16.25-.44.12-.67l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.58-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.23-.07.51.12.67L4.57 11c-.04.37-.07.64-.07 1s.03.63.07 1l-2.04 1.64c-.21.16-.25.44-.12.67l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.58 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.13-.23.07-.51-.12-.67l-2.04-1.64z",
  platforms:       "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
  databases:       "M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4.55c-1.3.83-3.51 1.55-6 1.55s-4.7-.72-6-1.55V9.45C7.3 10.28 9.51 11 12 11s4.7-.72 6-1.55v3z",
  bigdata:         "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
  cloud:           "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
  automation:      "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  machinelearning: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
  security:        "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
};

/* Arc x-positions for 6 lines converging to center bottom */
const ARC_XS = [55, 150, 245, 355, 450, 545];

export default function TechnologiesSection() {
  return (
    <section className="tech-section">
      <div className="tech-inner">

        {/* LEFT: logo card + arcs + globe */}
        <div className="tech-left">
          {tabs.map((tab, tabIdx) => {
            const logos = techData[tab.id] ?? [];
            return (
              <div
                key={tab.id}
                className={`tech-panel${tabIdx === 0 ? " tech-panel--active" : ""}`}
                id={`tech-panel-${tab.id}`}
                aria-hidden={tabIdx !== 0}
              >
                <div className="tech-logo-card">

                  {/* Logo grid */}
                  <div className="tech-logo-grid">
                    {logos.slice(0, 10).map((logo, i) => (
                      <div key={i} className="tech-logo-item" style={{ animationDelay: `${i * 55}ms` }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={logo.src} alt={logo.alt} loading="lazy" />
                      </div>
                    ))}
                  </div>

                  {/* Arc SVG — each path has class tech-arc-path for JS clone-reset */}
                  <div className="tech-arc-wrap" aria-hidden="true">
                    <svg
                      className="tech-arc-svg"
                      viewBox="0 0 600 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <linearGradient id={`tg${tab.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%"   stopColor="#c7d2fe" stopOpacity="0.15" />
                          <stop offset="50%"  stopColor="#38bdf8" stopOpacity="0.75" />
                          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      {ARC_XS.map((x, i) => (
                        <path
                          key={i}
                          className="tech-arc-path"
                          d={`M ${x} 0 C ${x} 100 300 100 300 200`}
                          stroke={`url(#tg${tab.id})`}
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          style={{ animationDelay: `${i * 90}ms` }}
                        />
                      ))}
                    </svg>

                    {/* Globe */}
                    <div className="tech-globe">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: heading + tabs */}
        <div className="tech-right">
          <p className="tech-eyebrow">
            <span className="tech-eyebrow-dot" aria-hidden="true" />
            SPECIALIZATION
          </p>
          <h2 className="tech-heading">
            <span className="tech-heading-blue">Technologies</span>
            <br />We Work With
          </h2>
          <div className="tech-tabs" role="tablist">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                className={`tech-tab${i === 0 ? " tech-tab--active" : ""}`}
                data-target={tab.id}
                role="tab"
                aria-selected={i === 0}
                aria-controls={`tech-panel-${tab.id}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <svg className="tech-tab-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={tabIconPaths[tab.id] ?? tabIconPaths.web} />
                </svg>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/*
        THE ARC FIX:
        replayAnims() uses the "clone trick" to reset CSS animations.
        CSS animations only play once per element lifetime.
        Replacing each .tech-arc-path with cloneNode() gives a fresh
        DOM node with zero animation history → the browser replays
        @keyframes techArcDraw from scratch on every tab switch.
        Same technique applied to logo items and the globe.
      */}
      <script dangerouslySetInnerHTML={{ __html: `
(function(){
  function replayAnims(panel) {
    /* 1. Logos — reset animation via style toggle */
    panel.querySelectorAll('.tech-logo-item').forEach(function(el, i) {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
      el.style.animationDelay = (i * 55) + 'ms';
    });

    /* 2. Arc paths — CLONE TRICK: replace with cloneNode to reset animation */
    panel.querySelectorAll('.tech-arc-path').forEach(function(el, i) {
      var parent = el.parentNode;
      if (!parent) return;
      var clone = el.cloneNode(true);
      clone.style.animationDelay = (i * 90) + 'ms';
      /* Remove inline strokeDashoffset override if any */
      clone.style.strokeDashoffset = '';
      parent.replaceChild(clone, el);
    });

    /* 3. Globe — reset animation */
    var globe = panel.querySelector('.tech-globe');
    if (globe) {
      globe.style.animation = 'none';
      void globe.offsetWidth;
      globe.style.animation = '';
    }
  }

  function init() {
    var tabs   = document.querySelectorAll('.tech-tab');
    var panels = document.querySelectorAll('.tech-panel');
    if (!tabs.length) return;

    tabs.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var target = this.dataset.target;

        tabs.forEach(function(t) {
          t.classList.remove('tech-tab--active');
          t.setAttribute('aria-selected', 'false');
        });
        this.classList.add('tech-tab--active');
        this.setAttribute('aria-selected', 'true');

        panels.forEach(function(p) {
          if (p.id === 'tech-panel-' + target) {
            p.classList.add('tech-panel--active');
            p.removeAttribute('aria-hidden');
            replayAnims(p);
          } else {
            p.classList.remove('tech-panel--active');
            p.setAttribute('aria-hidden', 'true');
          }
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
      `}} />
    </section>
  );
}
