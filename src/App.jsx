import { useEffect, useState } from 'react';
import { Cloud, GitBranch, PackageCheck, ShieldCheck } from 'lucide-react';
import StageCard from './components/StageCard.jsx';
import { environmentStats, pipelineStages } from './data.js';

export default function App() {
  const [buildData, setBuildData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/jenkins/latest-build')
      .then((res) => res.json())
      .then((data) => setBuildData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">Jenkins • Docker • GitHub • AWS</p>
          <h1>CI/CD Pipeline Automation Dashboard</h1>
          <p className="hero-copy">
            A DevOps project that automates build, test, containerization, artifact storage,
            and deployment workflows for a React application using Jenkins and AWS.
          </p>

          <div className="hero-actions">
            <a
              href="http://localhost:8081/job/learn-jenkins-app/"
              target="_blank"
              rel="noreferrer"
            >
              View Jenkins Pipeline
            </a>

            <a href="#architecture" className="secondary">
              Architecture
            </a>
          </div>
        </div>

        <div className="summary-card">
          <Cloud size={42} />
          <h2>{environmentStats.appName}</h2>
          <p>{environmentStats.provider}</p>
          <p>{environmentStats.deploymentType}</p>
        </div>
      </section>

      {buildData && (
        <section className="section">
          <div className="summary-card">
            <h2>Latest Jenkins Build</h2>
            <p><strong>Build:</strong> #{buildData.buildNumber}</p>
            <p><strong>Status:</strong> {buildData.status}</p>
            <p><strong>Duration:</strong> {(buildData.duration / 1000).toFixed(2)}s</p>
            <p><strong>Artifact:</strong> {buildData.artifact}</p>

            <a href={buildData.url} target="_blank" rel="noreferrer">
              Open Jenkins Build →
            </a>
          </div>
        </section>
      )}

      <section className="stats-grid" aria-label="Project highlights">
        <div>
          <GitBranch />
          <h3>GitHub Trigger</h3>
          <p>Push events start Jenkins builds automatically.</p>
        </div>
        <div>
          <PackageCheck />
          <h3>Build Artifacts</h3>
          <p>Production files are packaged and stored for deployment.</p>
        </div>
        <div>
          <ShieldCheck />
          <h3>Secure Secrets</h3>
          <p>Jenkins credentials manage AWS keys and environment variables.</p>
        </div>
      </section>

      <section id="pipeline" className="section">
        <div className="section-heading">
          <p className="eyebrow">Pipeline Stages</p>
          <h2>Automated Software Delivery Workflow</h2>
        </div>

        <div className="pipeline-grid">
          {pipelineStages.map((stage) => (
            <StageCard key={stage.name} stage={stage} />
          ))}
        </div>
      </section>

      <section id="architecture" className="section architecture">
        <div>
          <p className="eyebrow">Architecture</p>
          <h2>How the Deployment Works</h2>
          <p>
            Developers push code to GitHub. Jenkins checks out the repository,
            installs dependencies, runs tests, builds the React app, packages the
            deployment artifact, and archives the artifact for release.
          </p>
        </div>

        <ol className="architecture-list">
          <li>GitHub stores the source code and Jenkinsfile.</li>
          <li>Jenkins pulls the latest code from the main branch.</li>
          <li>Jenkins installs dependencies and runs automated tests.</li>
          <li>The React app is built into production-ready files.</li>
          <li>The deployment package is archived as a Jenkins build artifact.</li>
        </ol>
      </section>
    </main>
  );
}