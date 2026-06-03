import { Cloud, GitBranch, PackageCheck, ShieldCheck } from 'lucide-react';
import StageCard from './components/StageCard.jsx';
import { environmentStats, pipelineStages } from './data.js';

export default function App() {
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
            <a href="#pipeline">View Pipeline</a>
            <a href="#architecture" className="secondary">Architecture</a>
          </div>
        </div>

        <div className="summary-card">
          <Cloud size={42} />
          <h2>{environmentStats.appName}</h2>
          <p>{environmentStats.provider}</p>
          <p>{environmentStats.deploymentType}</p>
        </div>
      </section>

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
            Developers push code to GitHub. A webhook triggers Jenkins, which installs
            dependencies, runs tests, builds the React app, creates a Docker image, stores
            artifacts in S3, and deploys the containerized application to AWS Elastic Beanstalk.
          </p>
        </div>

        <ol className="architecture-list">
          <li>GitHub webhook sends push event to Jenkins.</li>
          <li>Jenkins runs checkout, install, test, and build stages.</li>
          <li>Docker image packages the app for consistent environments.</li>
          <li>Build artifacts are archived and uploaded to S3.</li>
          <li>Elastic Beanstalk deploys the application to staging or production.</li>
        </ol>
      </section>
    </main>
  );
}
