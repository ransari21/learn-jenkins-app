import { useEffect, useState } from 'react';
import { Cloud, GitBranch, PackageCheck, ShieldCheck, X } from 'lucide-react';
import StageCard from './components/StageCard.jsx';
import { environmentStats, pipelineStages } from './data.js';

export default function App() {
  const [buildData, setBuildData] = useState(null);
  const [showArchitecture, setShowArchitecture] = useState(false);

  const fetchBuildData = () => {
    fetch('http://localhost:3001/api/jenkins/latest-build')
      .then((res) => res.json())
      .then((data) => setBuildData(data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchBuildData();
  }, []);

  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">Jenkins • Docker • GitHub • AWS</p>
          <h1>CI/CD Pipeline Automation Dashboard</h1>

          <p className="hero-copy">
            A DevOps project that automates build, test, containerization,
            artifact storage, and deployment workflows for a React application
            using Jenkins and AWS.
          </p>

          <div className="hero-actions">
            <a
              href="http://localhost:8081/job/learn-jenkins-app/"
              target="_blank"
              rel="noreferrer"
            >
              View Jenkins Pipeline
            </a>

            <button
              onClick={() => setShowArchitecture(true)}
              className="secondary"
              style={{
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Architecture
            </button>
          </div>
        </div>

        <div className="summary-card">
          <Cloud size={42} />
          <h2>{environmentStats.appName}</h2>
          <p>{environmentStats.provider}</p>
          <p>{environmentStats.deploymentType}</p>
        </div>
      </section>

      {showArchitecture && (
        <div
          onClick={() => setShowArchitecture(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.72)',
            display: 'grid',
            placeItems: 'center',
            zIndex: 1000,
            padding: '24px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(720px, 100%)',
              background: '#0f172a',
              color: 'white',
              borderRadius: '24px',
              padding: '28px',
              boxShadow: '0 25px 80px rgba(0,0,0,0.35)'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}
            >
              <h2>Architecture Diagram</h2>

              <button
                onClick={() => setShowArchitecture(false)}
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <X size={24} />
              </button>
            </div>

            <pre
              style={{
                background: '#111827',
                padding: '24px',
                borderRadius: '18px',
                overflowX: 'auto',
                lineHeight: '1.7'
              }}
            >
{`GitHub Repository
       ↓
Jenkins Pipeline
       ↓
Install Dependencies
       ↓
Run Automated Tests
       ↓
Build React Application
       ↓
Package Artifact
       ↓
Archive Deployment ZIP
       ↓
Future AWS Deployment`}
            </pre>
          </div>
        </div>
      )}

      {buildData && (
        <section className="section">
          <div className="summary-card">
            <h2>Latest Jenkins Build</h2>

            <button
              onClick={fetchBuildData}
              style={{
                marginBottom: '1rem',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Refresh Build Status
            </button>

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
            installs dependencies, runs tests, builds the React app, packages
            the deployment artifact, and archives the artifact for release.
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