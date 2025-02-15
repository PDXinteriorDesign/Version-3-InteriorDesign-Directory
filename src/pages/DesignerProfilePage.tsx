import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase/config";
import { DesignerProfile } from "../components/DesignerProfile";
import { Navbar } from "../components/Navbar";
import { SEOHead } from "../components/SEOHead";

export const DesignerProfilePage: React.FC = () => {



  const { id } = useParams<{ id: string }>();
  const [designer, setDesigner] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDesigner = async () => {
      console.log(`Fetching designer with ID: ${id}`); // Debugging line

      if (!id) {
        console.error('Invalid designer ID');
        setError('Invalid designer ID');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'listings', id);
        console.log("Fetching document from Firestore:", docRef.path); // Debugging line
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Designer found:", docSnap.data()); // Debugging line
          setDesigner(docSnap.data());
        } else {
          console.error('Designer not found');
          setError('Designer not found');
        }
      } catch (err) {
        console.error("Error fetching designer data:", err);
        setError('Error fetching designer data');
      } finally {
        setLoading(false);
      }
    };

    fetchDesigner();
  }, [id]);


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Navbar />
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <a
              href="/designers"
              className="inline-flex items-center px-6 py-3 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors"
            >
              Browse All Designers
            </a>
          </div>
        </div>
      </div>
    );
  }

  const schema = designer && {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": designer.businessInfo?.name,
    "jobTitle": "Interior Designer",
    "worksFor": { "@type": "Organization", "name": designer.businessInfo?.company },
    "email": designer.businessInfo?.email,
    "telephone": designer.businessInfo?.phone,
    "url": designer.businessInfo?.website,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={`${designer.businessInfo?.name || "Designer Profile"} - Interior Designer | The Design Refuge`}
        description={`${designer.businessInfo?.name || "This"} is a professional interior designer at ${designer.businessInfo?.company || "an interior design company"}. View portfolio, services, and contact information.`}
        schema={schema}
      />


      <Navbar />

      <main className="pt-6">
        <DesignerProfile designer={designer} />
      </main>
    </div>
  );
};
