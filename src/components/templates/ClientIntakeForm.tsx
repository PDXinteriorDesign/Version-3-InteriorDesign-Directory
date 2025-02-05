import React from 'react';
import { FileText, Download } from 'lucide-react';

export const ClientIntakeForm: React.FC = () => {
  const downloadHtmlTemplate = () => {
    const formTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interior Design Client Intake Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { 
            font-family: system-ui, -apple-system, sans-serif;
            padding: 2rem;
            background-color: #f9fafb;
        }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        sage: {
                            600: '#5f6f56',
                            700: '#4d5945'
                        }
                    }
                }
            }
        }
    </script>
</head>
<body>
    ${formContent}
    <script>
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Form submitted successfully!');
        });
    </script>
</body>
</html>`;

    const blob = new Blob([formTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'client-intake-form.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const formContent = `
    <div class="max-w-2xl mx-auto">
      <form class="space-y-8">
        <!-- Client Information -->
        <section>
          <h2 class="text-xl font-semibold mb-4">Client Information</h2>
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Full Name *</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Email *</label>
                <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Phone *</label>
                <input type="tel" class="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Best Time to Contact</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg">
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Project Address *</label>
              <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg" rows="3" required></textarea>
            </div>
          </div>
        </section>

        <!-- Project Details -->
        <section>
          <h2 class="text-xl font-semibold mb-4">Project Details</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Project Type *</label>
              <select class="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
                <option value="">Select Project Type</option>
                <option value="full-home">Full Home Design</option>
                <option value="single-room">Single Room Design</option>
                <option value="kitchen-bath">Kitchen/Bath Remodel</option>
                <option value="consultation">Design Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-1">Desired Start Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg">
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Target Completion Date</label>
                <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg">
              </div>
            </div>
          </div>
        </section>

        <!-- Budget Information -->
        <section>
          <h2 class="text-xl font-semibold mb-4">Budget Information</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Budget Range *</label>
              <select class="w-full px-4 py-2 border border-gray-300 rounded-lg" required>
                <option value="">Select Budget Range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">Over $100,000</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Additional Budget Notes</label>
              <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg" rows="3"
                placeholder="Any specific budget considerations or constraints?"></textarea>
            </div>
          </div>
        </section>

        <!-- Style Preferences -->
        <section>
          <h2 class="text-xl font-semibold mb-4">Style Preferences</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Design Styles (Select all that apply)</label>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                <label class="flex items-center space-x-2">
                  <input type="checkbox" value="modern">
                  <span>Modern</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="checkbox" value="traditional">
                  <span>Traditional</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="checkbox" value="contemporary">
                  <span>Contemporary</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="checkbox" value="transitional">
                  <span>Transitional</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="checkbox" value="industrial">
                  <span>Industrial</span>
                </label>
                <label class="flex items-center space-x-2">
                  <input type="checkbox" value="bohemian">
                  <span>Bohemian</span>
                </label>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Inspiration Sources</label>
              <textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg" rows="3"
                placeholder="Share any Pinterest boards, Instagram accounts, or other inspiration sources"></textarea>
            </div>
          </div>
        </section>

        <div class="flex justify-end">
          <button type="submit" class="px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors">
            Submit Form
          </button>
        </div>
      </form>
    </div>`;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Download Form Template</h2>
            <p className="text-gray-600">
              Get the HTML version of this form to use on your own website.
            </p>
          </div>
          <FileText className="w-8 h-8 text-sage-600" />
        </div>

        <div className="bg-sage-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Implementation Instructions:</h3>
          <ol className="space-y-2 text-gray-800">
            <li>1. Download the HTML template</li>
            <li>2. Customize the form fields and styling to match your brand</li>
            <li>3. Add your company name and logo</li>
            <li>4. Update the form submission logic in the script section</li>
            <li>5. Upload to your web hosting service</li>
          </ol>
        </div>

        <button
          onClick={downloadHtmlTemplate}
          className="flex items-center justify-center w-full px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download HTML Template
        </button>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Form Preview</h2>
        <iframe
          srcDoc={`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="https://cdn.tailwindcss.com"></script>
                <style>
                    body { 
                      font-family: system-ui, -apple-system, sans-serif;
                      padding: 2rem;
                      background-color: #f9fafb;
                    }
                </style>
                <script>
                  tailwind.config = {
                    theme: {
                      extend: {
                        colors: {
                          sage: {
                            600: '#5f6f56',
                            700: '#4d5945'
                          }
                        }
                      }
                    }
                  }
                </script>
            </head>
            <body>
                ${formContent}
            </body>
            </html>
          `}
          className="w-full h-[800px] border-0 rounded-lg bg-gray-50"
          title="Form Preview"
        />
      </div>
    </div>
  );
};