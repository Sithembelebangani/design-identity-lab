
import { 
  Cloud, 
  Database, 
  Server, 
  HardDrive, 
  Code
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CloudExplanation = () => {
  return (
    <div className="mt-4 bg-gray-50 rounded-lg p-4 text-sm">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="cloud-models">
          <AccordionTrigger className="font-semibold text-portfolio-blue">
            <div className="flex items-center gap-2">
              <Cloud size={18} />
              Cloud Deployment Models
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Cloud size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">Public Cloud</h4>
                  <p className="text-portfolio-lightBlue">Cloud resources owned and operated by third-party providers delivered over the internet. Offers scalability and cost-effectiveness with shared infrastructure among multiple organizations. Examples include AWS, Microsoft Azure, and Google Cloud.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-purple-100 p-2 rounded-full">
                  <HardDrive size={16} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">Private Cloud</h4>
                  <p className="text-portfolio-lightBlue">Cloud infrastructure exclusively used by a single organization, either managed internally or by a third party. Provides greater control, security, and customization but requires significant investment in hardware and expertise.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-teal-100 p-2 rounded-full">
                  <Server size={16} className="text-teal-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">Hybrid Cloud</h4>
                  <p className="text-portfolio-lightBlue">Combines private and public cloud resources with orchestration between them. Allows organizations to maintain sensitive workloads in private infrastructure while leveraging public cloud benefits for less sensitive operations or during peak demands.</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="aws-services">
          <AccordionTrigger className="font-semibold text-portfolio-blue">
            <div className="flex items-center gap-2">
              <Server size={18} />
              AWS Core Services
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-2">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Server size={16} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">EC2 (Elastic Compute Cloud)</h4>
                  <p className="text-portfolio-lightBlue">Provides scalable computing capacity in the AWS cloud. Allows users to launch virtual servers (instances) with customizable CPU, memory, storage, and networking capabilities. Supports multiple operating systems and enables users to scale capacity up or down as computing requirements change.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <HardDrive size={16} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">S3 (Simple Storage Service)</h4>
                  <p className="text-portfolio-lightBlue">Object storage service offering industry-leading scalability, availability, security, and performance. Store and retrieve any amount of data from anywhere on the web. Features include versioning, lifecycle policies, encryption, and fine-grained access controls. Commonly used for backup, archiving, content distribution, and data lakes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Database size={16} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">RDS (Relational Database Service)</h4>
                  <p className="text-portfolio-lightBlue">Managed relational database service supporting multiple database engines like MySQL, PostgreSQL, Oracle, and SQL Server. Simplifies database administration tasks such as provisioning, patching, backup, recovery, and scaling. Provides high availability options with Multi-AZ deployments and read replicas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Code size={16} className="text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-blue">Lambda</h4>
                  <p className="text-portfolio-lightBlue">Serverless compute service that runs code in response to events without provisioning or managing servers. Automatically scales applications by running code in response to triggers like HTTP requests, database changes, file uploads, or scheduled events. Pay only for the compute time consumed with no charges when code isn't running.</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CloudExplanation;
