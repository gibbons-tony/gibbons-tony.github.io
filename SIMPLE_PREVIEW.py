#!/usr/bin/env python3
"""
Simple Preview Server - No Dependencies Required
Shows your new blog posts and enhanced content without needing Jekyll or additional packages.
"""

import http.server
import socketserver
import os
import re
from pathlib import Path

PORT = 8000

class SimplePreviewHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/" or self.path == "/preview":
            self.send_preview_page()
        elif self.path.startswith("/preview/post/"):
            post_name = self.path.replace("/preview/post/", "")
            self.send_content_preview("_posts", post_name)
        elif self.path.startswith("/preview/case/"):
            case_name = self.path.replace("/preview/case/", "")
            self.send_content_preview("_casestudies", case_name)
        elif self.path == "/preview/about":
            self.send_content_preview("_pages", "about.md")
        elif self.path == "/preview/story":
            self.send_content_preview("_pages", "story.md")
        else:
            super().do_GET()

    def parse_front_matter(self, content):
        """Extract front matter and content from markdown file"""
        if content.startswith('---'):
            parts = content.split('---', 2)
            if len(parts) >= 3:
                fm_lines = parts[1].strip().split('\n')
                front_matter = {}
                for line in fm_lines:
                    if ':' in line:
                        key, value = line.split(':', 1)
                        front_matter[key.strip()] = value.strip().strip('"')
                return front_matter, parts[2]
        return {}, content

    def send_preview_page(self):
        """Send the main preview page listing all new content"""
        html = """
        <!DOCTYPE html>
        <html>
        <head>
            <title>Website Preview - Tony Gibbons</title>
            <meta charset="utf-8">
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 20px;
                    line-height: 1.6;
                    color: #333;
                }
                h1 {
                    color: #2c3e50;
                    border-bottom: 3px solid #3498db;
                    padding-bottom: 15px;
                    margin-bottom: 30px;
                }
                h2 {
                    color: #2980b9;
                    margin-top: 40px;
                    margin-bottom: 20px;
                }
                .hero {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 40px;
                    border-radius: 10px;
                    margin-bottom: 30px;
                }
                .hero h1 {
                    color: white;
                    border: none;
                    margin: 0 0 10px 0;
                }
                .hero p {
                    font-size: 1.2em;
                    opacity: 0.95;
                }
                .post {
                    margin: 20px 0;
                    padding: 20px;
                    border-left: 4px solid #3498db;
                    background: #f8f9fa;
                    border-radius: 5px;
                    transition: transform 0.2s;
                }
                .post:hover {
                    transform: translateX(5px);
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .post h3 {
                    margin: 0 0 10px 0;
                    color: #2c3e50;
                }
                .post .date {
                    color: #7f8c8d;
                    font-size: 0.9em;
                    margin-bottom: 8px;
                }
                .post .desc {
                    margin-top: 10px;
                    color: #555;
                }
                a {
                    color: #3498db;
                    text-decoration: none;
                    font-weight: 500;
                }
                a:hover {
                    text-decoration: underline;
                }
                .warning {
                    background: #fff3cd;
                    border-left: 4px solid #ffc107;
                    padding: 15px 20px;
                    margin: 20px 0;
                    border-radius: 5px;
                }
                .success {
                    background: #d4edda;
                    border-left: 4px solid #28a745;
                    padding: 15px 20px;
                    margin: 30px 0;
                    border-radius: 5px;
                    font-size: 1.1em;
                }
                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 20px;
                    margin: 20px 0;
                }
                .card {
                    background: white;
                    border: 1px solid #e0e0e0;
                    padding: 20px;
                    border-radius: 8px;
                    transition: box-shadow 0.2s;
                }
                .card:hover {
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                .card h4 {
                    margin: 0 0 10px 0;
                    color: #2c3e50;
                }
                code {
                    background: #f5f5f5;
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-family: 'Courier New', monospace;
                    font-size: 0.9em;
                }
                .tag {
                    display: inline-block;
                    background: #e3f2fd;
                    color: #1976d2;
                    padding: 3px 10px;
                    border-radius: 15px;
                    font-size: 0.85em;
                    margin-right: 8px;
                }
                ul li {
                    margin: 8px 0;
                }
            </style>
        </head>
        <body>
            <div class="hero">
                <h1>🚀 Website Preview - Ready to Launch</h1>
                <p>Your enhanced narrative with Crucible achievement and philosophy is staged locally</p>
            </div>

            <div class="warning">
                <strong>⚠️ Preview Mode:</strong> This shows your content without Jekyll styling.
                The actual site will look much better with your full theme and layout.
            </div>

            <h2>✨ New Blog Posts (March 12, 2026)</h2>
        """

        # List new blog posts
        posts_dir = Path("_posts")
        new_posts = sorted(posts_dir.glob("2026-03-12-*.md"), reverse=True)

        for post_path in new_posts:
            with open(post_path, 'r', encoding='utf-8') as f:
                content = f.read()
                front_matter, _ = self.parse_front_matter(content)
                title = front_matter.get('title', post_path.stem)
                desc = front_matter.get('description', '')
                date = front_matter.get('date', '2026-03-12')
                tags = front_matter.get('tags', '').strip('[]').replace('[', '').replace(']', '')

                html += f'''
                <div class="post">
                    <h3>📝 <a href="/preview/post/{post_path.name}">{title}</a></h3>
                    <div class="date">Published: {date}</div>
                    <div class="desc">{desc}</div>
                    <div style="margin-top: 10px;">'''

                if tags:
                    for tag in tags.split(','):
                        html += f'<span class="tag">{tag.strip()}</span>'

                html += '''
                    </div>
                </div>
                '''

        html += """
            <h2>📊 Enhanced Case Studies</h2>
            <div class="grid">
        """

        # List key case studies
        key_cases = [
            ("00_time_tracking_app.md", "R&D Portfolio Visibility", "🎯 CORRECTED: Not 'Time Tracking' - Innovation with Bart Sano & Nan Boden"),
            ("03_revenue_platform.md", "Revenue Platform ($30B+)", "📈 0→8,000 users without mandates"),
            ("06_ai_analytics_assistant.md", "AI Analytics Assistant", "🤖 Proactive strategy with crawl-walk-run approach"),
            ("02_inventory_project.md", "Memory Recovery ($100M+)", "💰 Single quarter inventory optimization")
        ]

        for filename, title, desc in key_cases:
            html += f'''
            <div class="card">
                <h4><a href="/preview/case/{filename}">{title}</a></h4>
                <p>{desc}</p>
            </div>
            '''

        html += f"""
            </div>
            <p style="margin-top: 20px;">
                <a href="#all-cases">View all {len(list(Path('_casestudies').glob('*.md')))} enhanced case studies →</a>
            </p>

            <h2>🎯 Philosophy & About Pages</h2>
            <div class="grid">
                <div class="card">
                    <h4><a href="/preview/about">About Page</a></h4>
                    <p>✅ Added philosophy quote<br>
                    ✅ "Insatiably Curious Builder" subtitle<br>
                    ✅ Personal voice integrated</p>
                </div>
                <div class="card">
                    <h4><a href="/preview/story">Story Page</a></h4>
                    <p>✅ Oakland origins added<br>
                    ✅ "Creating Pull" section<br>
                    ✅ Adventure interests included</p>
                </div>
            </div>

            <h2>✅ Key Improvements Made</h2>
            <ul>
                <li><strong>Crucible Achievement:</strong> 1.7M lines of code in 31 days with full journey narrative</li>
                <li><strong>Creating Pull Philosophy:</strong> Embedded throughout with real examples</li>
                <li><strong>R&D Portfolio Visibility:</strong> Properly positioned as innovation, not tracking</li>
                <li><strong>AI Analytics:</strong> Shown as strategic vision with crawl-walk-run approach</li>
                <li><strong>STAR Format:</strong> All case studies enhanced with 40-50% more content</li>
                <li><strong>Specific Metrics:</strong> $30B+ Revenue Platform, $200M+ improvements, $100M+ recovery</li>
                <li><strong>Political Realities:</strong> Authentic narratives about opposition becoming champions</li>
            </ul>

            <h2 id="all-cases">📁 All Enhanced Case Studies</h2>
            <ul>
        """

        # List all case studies
        cases_dir = Path("_casestudies")
        for case_path in sorted(cases_dir.glob("*.md")):
            if not case_path.name.startswith('.') and not case_path.name.startswith('backup'):
                with open(case_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    front_matter, _ = self.parse_front_matter(content)
                    title = front_matter.get('title', case_path.stem.replace('_', ' ').title())
                    html += f'<li><a href="/preview/case/{case_path.name}">{title}</a></li>'

        html += f"""
            </ul>

            <div class="success">
                <strong>✅ Ready to Publish!</strong><br><br>
                Everything is staged and ready. To make these changes live:<br><br>
                <code>cd {os.getcwd()}</code><br>
                <code>./PUBLISH_WEBSITE.sh</code><br><br>
                Your enhanced narrative will be live at <a href="https://gibbons-tony.github.io">gibbons-tony.github.io</a> in ~5 minutes.
            </div>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 0.9em;">
                <p><strong>Preview Server:</strong> Running on port {PORT} | Press Ctrl+C to stop</p>
            </div>
        </body>
        </html>
        """

        self.send_response(200)
        self.send_header("Content-type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write(html.encode())

    def send_content_preview(self, directory, filename):
        """Preview specific content"""
        file_path = Path(directory) / filename
        if file_path.exists():
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            front_matter, markdown_content = self.parse_front_matter(content)
            title = front_matter.get('title', filename)

            # Convert basic markdown to HTML (simple conversion)
            html_content = markdown_content
            # Headers
            html_content = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html_content, flags=re.MULTILINE)
            html_content = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html_content, flags=re.MULTILINE)
            html_content = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html_content, flags=re.MULTILINE)
            # Bold and italic
            html_content = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html_content)
            html_content = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html_content)
            # Code blocks
            html_content = re.sub(r'`([^`]+)`', r'<code>\1</code>', html_content)
            # Links
            html_content = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2">\1</a>', html_content)
            # Line breaks
            html_content = html_content.replace('\n\n', '</p><p>').replace('\n', '<br>')
            html_content = f'<p>{html_content}</p>'

            html = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <title>{title} - Preview</title>
                <meta charset="utf-8">
                <style>
                    body {{
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 40px 20px;
                        line-height: 1.8;
                        color: #333;
                    }}
                    h1 {{
                        color: #2c3e50;
                        border-bottom: 3px solid #3498db;
                        padding-bottom: 15px;
                        margin-bottom: 30px;
                    }}
                    h2 {{
                        color: #2980b9;
                        margin-top: 40px;
                        margin-bottom: 20px;
                    }}
                    h3 {{
                        color: #34495e;
                        margin-top: 30px;
                    }}
                    pre {{
                        background: #f5f5f5;
                        padding: 15px;
                        overflow-x: auto;
                        border-radius: 5px;
                        border: 1px solid #ddd;
                    }}
                    code {{
                        background: #f5f5f5;
                        padding: 2px 6px;
                        border-radius: 3px;
                        font-family: 'Courier New', monospace;
                        font-size: 0.9em;
                    }}
                    blockquote {{
                        border-left: 4px solid #3498db;
                        padding-left: 20px;
                        color: #555;
                        font-style: italic;
                        margin: 20px 0;
                    }}
                    a {{
                        color: #3498db;
                        text-decoration: none;
                        font-weight: 500;
                    }}
                    a:hover {{
                        text-decoration: underline;
                    }}
                    .back {{
                        margin-bottom: 30px;
                        padding: 10px 15px;
                        background: #f8f9fa;
                        display: inline-block;
                        border-radius: 5px;
                    }}
                    p {{
                        margin: 15px 0;
                    }}
                    strong {{
                        color: #2c3e50;
                    }}
                    .metadata {{
                        background: #f8f9fa;
                        padding: 15px;
                        border-radius: 5px;
                        margin-bottom: 30px;
                        border: 1px solid #e0e0e0;
                    }}
                    .metadata p {{
                        margin: 5px 0;
                        font-size: 0.9em;
                    }}
                </style>
            </head>
            <body>
                <div class="back"><a href="/preview">← Back to Preview Index</a></div>
                <h1>{title}</h1>
            """

            # Add metadata if it exists
            if front_matter:
                html += '<div class="metadata">'
                if 'date' in front_matter:
                    html += f"<p><strong>Date:</strong> {front_matter['date']}</p>"
                if 'description' in front_matter:
                    html += f"<p><strong>Description:</strong> {front_matter['description']}</p>"
                if 'tags' in front_matter:
                    html += f"<p><strong>Tags:</strong> {front_matter['tags']}</p>"
                html += '</div>'

            html += f"""
                {html_content}
                <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                    <div class="back"><a href="/preview">← Back to Preview Index</a></div>
                </div>
            </body>
            </html>
            """

            self.send_response(200)
            self.send_header("Content-type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(html.encode())
        else:
            self.send_error(404, "File not found")

if __name__ == "__main__":
    os.chdir(Path(__file__).parent)

    print("\n" + "="*60)
    print("🚀 WEBSITE PREVIEW SERVER")
    print("="*60)
    print(f"\n📍 Preview URL: http://localhost:{PORT}/preview")
    print("\n⚠️  Note: This is a simplified preview without Jekyll styling")
    print("    Your actual site will look much better when published!")
    print("\n🛑 Press Ctrl+C to stop the server")
    print("="*60 + "\n")

    try:
        with socketserver.TCPServer(("", PORT), SimplePreviewHandler) as httpd:
            print(f"✅ Server started successfully on port {PORT}")
            print(f"\n👉 Open http://localhost:{PORT}/preview in your browser\n")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n🛑 Server stopped")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"\n❌ Port {PORT} is already in use!")
            print(f"   Try: lsof -i:{PORT} to see what's using it")
            print(f"   Or wait a moment and try again")
        else:
            raise