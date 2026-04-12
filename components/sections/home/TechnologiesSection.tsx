const ScrollArrow = () => (
  <button className="tech-scroll-arrow" aria-label="Scroll up">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const BrowserWindow = ({ children, aos }: { children: React.ReactNode; aos?: string }) => (
  <div className="technologies-grid-section" {...(aos ? { "data-aos": aos } : {})}>
    <div className="browser-window">
      <div className="browser-header">
        <div className="browser-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="browser-menu">
          <span className="menu-dot"></span>
          <span className="menu-dot"></span>
          <span className="menu-dot"></span>
        </div>
      </div>
      {children}
    </div>
  </div>
);

const TechTab = ({
  id,
  active,
  logos,
  gridAos,
  browserAos,
}: {
  id: string;
  active?: boolean;
  logos: { src: string; alt: string }[];
  gridAos?: string;
  browserAos?: string;
}) => (
  <div className={`technologies-content${active ? " active" : ""}`} id={id}>
    <div className="technologies-layout">
      <div className="technologies-image-section">
        <img src="/images/technologies_we_work_with/devloper_working_img.png" alt="Developer Working" className="tech-developer-img" />
      </div>
      <BrowserWindow aos={browserAos}>
        <div className="tech-logos-grid" {...(gridAos ? { "data-aos": gridAos } : {})}>
          {logos.map((l, i) => (
            <div className="tech-logo-item" key={i}>
              <img src={l.src} alt={l.alt} />
            </div>
          ))}
        </div>
      </BrowserWindow>
    </div>
    <ScrollArrow />
  </div>
);

const tabs = [
  { id: "web", icon: "🌐", label: "Web", active: true },
  { id: "mobile", icon: "📱", label: "Mobile" },
  { id: "devops", icon: "⚙️", label: "DevOps" },
  { id: "platforms", icon: "🔧", label: "Platforms" },
  { id: "databases", icon: "🗄️", label: "Relational Database" },
  { id: "bigdata", icon: "📊", label: "Bigdata" },
  { id: "automation", icon: "🤖", label: "Automation tools" },
  { id: "machinelearning", icon: "🧠", label: "Machine Learning" },
  { id: "security", icon: "🔒", label: "Information security" },
  { id: "cloud", icon: "☁️", label: "Cloud" },
];

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
    { src: `${p}openshift.webp`, alt: "OpenShift" }, { src: `${p}mesos.webp`, alt: "Mesos" },
    { src: `${p}ansible.webp`, alt: "Ansible" }, { src: `${p}puppet.webp`, alt: "Puppet" },
    { src: `${p}caffe.webp`, alt: "Caffe" }, { src: `${p}saltstack.webp`, alt: "SaltStack" },
    { src: `${p}terraform.webp`, alt: "Terraform" }, { src: `${p}packer.webp`, alt: "Packer" },
    { src: `${p}aws developer tools.webp`, alt: "AWS Developer Tools" },
    { src: `${p}azure devops.webp`, alt: "Azure DevOps" },
    { src: `${p}google developer tools.webp`, alt: "Google Developer Tools" },
    { src: `${p}ci co.webp`, alt: "CI/CD" }, { src: `${p}jenkins.webp`, alt: "Jenkins" },
    { src: `${p}tc.webp`, alt: "TeamCity" }, { src: `${p}zabbix.webp`, alt: "Zabbix" },
    { src: `${p}elasticsearch.webp`, alt: "Elasticsearch" },
    { src: `${p}prometheus.webp`, alt: "Prometheus" }, { src: `${p}grafana.webp`, alt: "Grafana" },
    { src: `${p}datadog.webp`, alt: "Datadog" },
  ],
  platforms: [
    { src: `${p}dynamics365.webp`, alt: "Dynamics 365" }, { src: `${p}salesforce.webp`, alt: "Salesforce" },
    { src: `${p}adobe commerce.webp`, alt: "Adobe Commerce" },
    { src: `${p}share point.webp`, alt: "SharePoint" }, { src: `${p}servicenow.webp`, alt: "ServiceNow" },
  ],
  databases: [
    { src: `${p}sqlserver.webp`, alt: "SQL Server" }, { src: `${p}mysql.webp`, alt: "MySQL" },
    { src: `${p}oracle.webp`, alt: "Oracle" }, { src: `${p}postgresql.webp`, alt: "PostgreSQL" },
    { src: `${p}azure synapse analytics.webp`, alt: "Azure Synapse Analytics" },
    { src: `${p}azure sql database.webp`, alt: "Azure SQL Database" },
    { src: `${p}amazon RDS.webp`, alt: "Amazon RDS" }, { src: `${p}amazon S3.webp`, alt: "Amazon S3" },
    { src: `${p}google cloud Sql.webp`, alt: "Google Cloud SQL" },
  ],
  bigdata: [
    { src: `${p}hadoop.webp`, alt: "Hadoop" }, { src: `${p}spark.webp`, alt: "Spark" },
    { src: `${p}cassandra.webp`, alt: "Cassandra" }, { src: `${p}kafka.webp`, alt: "Kafka" },
    { src: `${p}hive.webp`, alt: "Hive" }, { src: `${p}zookeeper.webp`, alt: "Zookeeper" },
    { src: `${p}apache HBASE.webp`, alt: "Apache HBase" },
    { src: `${p}azure cosmes DB.webp`, alt: "Azure Cosmos DB" },
    { src: `${p}zure blob storage.webp`, alt: "Azure Blob Storage" },
    { src: `${p}azure data lake.webp`, alt: "Azure Data Lake" },
    { src: `${p}amazon dynamoDB.webp`, alt: "Amazon DynamoDB" },
    { src: `${p}amazon documentDB.webp`, alt: "Amazon DocumentDB" },
    { src: `${p}aws elasticache.webp`, alt: "AWS ElastiCache" },
    { src: `${p}mongoDB.webp`, alt: "MongoDB" },
    { src: `${p}google cloud datastore.webp`, alt: "Google Cloud Datastore" },
  ],
  machinelearning: [
    { src: `${p}matlab.webp`, alt: "MATLAB" }, { src: `${p}octave.webp`, alt: "Octave" },
    { src: `${p}r.webp`, alt: "R" }, { src: `${p}mahout.webp`, alt: "Mahout" },
    { src: `${p}caffe.webp`, alt: "Caffe" }, { src: `${p}mxnet.webp`, alt: "MXNet" },
    { src: `${p}tensorflow.webp`, alt: "TensorFlow" }, { src: `${p}keras.webp`, alt: "Keras" },
    { src: `${p}torch.webp`, alt: "Torch" }, { src: `${p}openCV.webp`, alt: "OpenCV" },
    { src: `${p}theano.webp`, alt: "Theano" }, { src: `${p}spark.webp`, alt: "Spark" },
    { src: `${p}scikit learn.webp`, alt: "Scikit-learn" }, { src: `${p}gensim.webp`, alt: "Gensim" },
    { src: `${p}spacy.webp`, alt: "spaCy" },
    { src: `${p}amazon machine learning.webp`, alt: "Amazon Machine Learning" },
    { src: `${p}amazon sagemaker.webp`, alt: "Amazon SageMaker" },
    { src: `${p}azure machine learning.webp`, alt: "Azure Machine Learning" },
    { src: `${p}google cloud ai platform.webp`, alt: "Google Cloud AI Platform" },
  ],
  automation: [
    { src: `${p}se.webp`, alt: "Selenium" }, { src: `${p}appium.webp`, alt: "Appium" },
    { src: `${p}protractor.webp`, alt: "Protractor" }, { src: `${p}fmbt.webp`, alt: "FMBT" },
    { src: `${p}xctest.webp`, alt: "XCTest" },
    { src: `${p}teststackwhite.webp`, alt: "TestStack White" },
    { src: `${p}cuit.webp`, alt: "CUIT" }, { src: `${p}ranorex.webp`, alt: "Ranorex" },
    { src: `${p}postman.webp`, alt: "Postman" },
    { src: `${p}apache jmeter.webp`, alt: "Apache JMeter" },
    { src: `${p}unified functional testing.webp`, alt: "UFT" },
  ],
  security: [
    { src: `${p}radar.webp`, alt: "Radar" }, { src: `${p}cloudflare.webp`, alt: "Cloudflare" },
    { src: `${p}siege.webp`, alt: "Siege" }, { src: `${p}burpsuite.webp`, alt: "Burp Suite" },
    { src: `${p}nessus.webp`, alt: "Nessus" }, { src: `${p}air.webp`, alt: "Air" },
    { src: `${p}acunetix.webp`, alt: "Acunetix" }, { src: `${p}metasploit.webp`, alt: "Metasploit" },
    { src: `${p}nmap.webp`, alt: "Nmap" }, { src: `${p}dirb.webp`, alt: "Dirb" },
    { src: `${p}wireshark.webp`, alt: "Wireshark" }, { src: `${p}zmap.webp`, alt: "Zmap" },
    { src: `${p}masscan.webp`, alt: "Masscan" },
  ],
  cloud: [
    { src: `${p}aws.webp`, alt: "AWS" }, { src: `${p}digital ocean.webp`, alt: "Digital Ocean" },
    { src: `${p}google cloud.webp`, alt: "Google Cloud" },
    { src: `${p}microsoft azure.webp`, alt: "Microsoft Azure" },
    { src: `${p}rockspace.webp`, alt: "Rackspace" },
  ],
};

export default function TechnologiesSection() {
  return (
    <div className="technologies-container">
      <p className="technologies-specialization">SPECIALIZATION</p>
      <h3 className="technologies-container-header">Technologies We Work With</h3>

      <div className="technologies-tabs">
        {tabs.map((tab) => (
          <button
            className={`technologies-tab-button${tab.active ? " active" : ""}`}
            data-tab={tab.id}
            key={tab.id}
          >
            <span className="tab-icon">{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <TechTab
          key={tab.id}
          id={tab.id}
          active={tab.active}
          logos={techData[tab.id]}
          browserAos={tab.id === "web" ? "fade-right" : undefined}
          gridAos={tab.id === "mobile" ? "fade-right" : undefined}
        />
      ))}
    </div>
  );
}
