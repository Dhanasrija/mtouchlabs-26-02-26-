function AnimatedText({
  text,
  startDelay = 0,
  className = "",
}: {
  text: string;
  startDelay?: number;
  className?: string;
}) {
  return (
    <span className={className} aria-hidden="true">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="tech-char"
          style={{ animationDelay: `${startDelay + i * 32}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

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
  { id: "bigdata",         label: "Big Data" },
  { id: "cloud",           label: "Cloud" },
  { id: "automation",      label: "Automation tools" },
  { id: "machinelearning", label: "Machine Learning" },
  { id: "security",        label: "Information Security" },
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

const ARC_XS = [55, 150, 245, 355, 450, 545];

export default function TechnologiesSection() {
  const techCharsCount = "Technologies".length;
  const headingLine2Start = 80 + techCharsCount * 32;
  const tabsStart = headingLine2Start + "We Work With".length * 32 + 100;

  return (
    <>
      <style>{`
        .tech-radio {
          position: fixed;
          top: 0;
          left: 0;
          opacity: 0;
          width: 1px;
          height: 1px;
          pointer-events: none;
          clip: rect(0,0,0,0);
          overflow: hidden;
        }

        /* All tab panels hidden by default */
        .tech-tab-panel { display: none; }

        /* Show the checked panel */
        #tech-web:checked          ~ .tech-main .tech-tab-panel-web          { display: block; animation: techPanelIn 0.4s ease-out both; }
        #tech-mobile:checked       ~ .tech-main .tech-tab-panel-mobile       { display: block; animation: techPanelIn 0.4s ease-out both; }
        #tech-devops:checked       ~ .tech-main .tech-tab-panel-devops       { display: block; animation: techPanelIn 0.4s ease-out both; }
        #tech-platforms:checked    ~ .tech-main .tech-tab-panel-platforms    { display: block; animation: techPanelIn 0.4s ease-out both; }
        #tech-databases:checked    ~ .tech-main .tech-tab-panel-databases    { display: block; animation: techPanelIn 0.4s ease-out both; }
        #tech-bigdata:checked      ~ .tech-main .tech-tab-panel-bigdata      { display: block; animation: techPanelIn 0.4s ease-out both; }
        #tech-cloud:checked        ~ .tech-main .tech-tab-panel-cloud        { display: block; animation: techPanelIn 0.4s ease-out both; }
        #tech-automation:checked   ~ .tech-main .tech-tab-panel-automation   { display: block; animation: techPanelIn 0.4s ease-out both; }
        #tech-machinelearning:checked ~ .tech-main .tech-tab-panel-machinelearning { display: block; animation: techPanelIn 0.4s ease-out both; }
        #tech-security:checked     ~ .tech-main .tech-tab-panel-security     { display: block; animation: techPanelIn 0.4s ease-out both; }

        /* Active tab label styling */
        #tech-web:checked          ~ .tech-main label[for="tech-web"],
        #tech-mobile:checked       ~ .tech-main label[for="tech-mobile"],
        #tech-devops:checked       ~ .tech-main label[for="tech-devops"],
        #tech-platforms:checked    ~ .tech-main label[for="tech-platforms"],
        #tech-databases:checked    ~ .tech-main label[for="tech-databases"],
        #tech-bigdata:checked      ~ .tech-main label[for="tech-bigdata"],
        #tech-cloud:checked        ~ .tech-main label[for="tech-cloud"],
        #tech-automation:checked   ~ .tech-main label[for="tech-automation"],
        #tech-machinelearning:checked ~ .tech-main label[for="tech-machinelearning"],
        #tech-security:checked     ~ .tech-main label[for="tech-security"] {
          background-color: #3E8CFB;
          color: #fff;
          border-color: #3E8CFB;
        }

        @keyframes techPanelIn {
          from { opacity: 0; transform: translateY(16px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0);   }
        }

        .tech-section {
          background-color: #FFFFFF !important;
          padding: 80px 0;
        }
        .tech-logo-card {
          background: linear-gradient(116.72deg, #F3F0FF 0%, #F0F6FF 100%) !important;
        }
      `}</style>

      {/* Radio inputs — must be siblings of .tech-main for CSS ~ selector */}
      {tabs.map((tab, i) => (
        <input
          key={tab.id}
          type="radio"
          name="tech-tab"
          id={`tech-${tab.id}`}
          className="tech-radio"
          defaultChecked={i === 0}
        />
      ))}

      <section className="tech-section tech-section--visible tech-main">
        <div className="tech-inner">

          {/* LEFT: logo card per tab */}
          <div className="tech-left">
            <div className="tech-panel tech-panel--active">
              {tabs.map((tab) => (
                <div key={tab.id} className={`tech-tab-panel tech-tab-panel-${tab.id}`}>
                  <div className="tech-logo-card">
                    <div className="tech-logo-grid">
                      {(techData[tab.id] ?? []).slice(0, 10).map((logo, i) => (
                        <div key={i} className="tech-logo-item" style={{ animationDelay: `${i * 55}ms` }}>
                          <img src={logo.src} alt={logo.alt} loading="lazy" />
                        </div>
                      ))}
                    </div>

                    <div className="tech-arc-wrap" aria-hidden="true">
                      <svg
                        className="tech-arc-svg"
                        viewBox="0 0 600 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <defs>
                          <linearGradient id={`tg-${tab.id}`} x1="0" y1="0" x2="0" y2="1">
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
                            stroke={`url(#tg-${tab.id})`}
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            style={{ animationDelay: `${i * 90}ms` }}
                          />
                        ))}
                      </svg>

                      <div className="tech-globe">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d={tabIconPaths[tab.id] ?? tabIconPaths.web} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: heading + tab labels */}
          <div className="tech-right">
            <p className="tech-eyebrow" aria-label="SPECIALIZATION">
              {/* <span className="tech-eyebrow-dot" aria-hidden="true" /> */}
              <AnimatedText text="• SPECIALIZATION" startDelay={0} />
            </p>
            <h2 className="tech-heading" aria-label="Technologies We Work With">
              <AnimatedText text="Technologies" startDelay={80} className="tech-heading-blue" />
              <br />
              <AnimatedText text="We Work With" startDelay={headingLine2Start} />
            </h2>
            <div className="tech-tabs" role="tablist">
              {tabs.map((tab, i) => (
                <label
                  key={tab.id}
                  htmlFor={`tech-${tab.id}`}
                  className="tech-tab"
                  role="tab"
                  style={{ animationDelay: `${tabsStart + i * 55}ms`, cursor: "pointer" }}
                >
                  <svg className="tech-tab-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={tabIconPaths[tab.id] ?? tabIconPaths.web} />
                  </svg>
                  {tab.label}
                </label>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}