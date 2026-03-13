#!/usr/bin/env python3
"""
Local Preview Server for Jekyll Site
This creates a simple preview of your blog posts and pages without needing Jekyll installed.
"""

import http.server
import socketserver
import os
import re
from pathlib import Path
import markdown
import yaml
from datetime import datetime

PORT = 8000

class PreviewHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/" or self.path == "/preview":
            self.send_preview_page()
        elif self.path.startswith("/preview/post/"):
            post_name = self.path.replace("/preview/post/", "")
            self.send_post_preview(post_name)
        elif self.path.startswith("/preview/case/"):
            case_name = self.path.replace("/preview/case/", "")
            self.send_case_preview(case_name)
        else:
            super().do_GET()

    def send_preview_page(self):
        """Send the main preview page listing all new content"""
        html = """
        <!DOCTYPE html>
        <html>
        <head>
            <title>Website Preview - Tony Gibbons</title>
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
                       max-width: 900px; margin: 0 auto; padding: 20px; line-height: 1.6; }
                h1 { color: #333; border-bottom: 2px solid #5086C7; padding-bottom: 10px; }
                h2 { color: #5086C7; margin-top: 30px; }
                .post { margin: 20px 0; padding: 15px; border-left: 3px solid #5086C7; background: #f7f7f7; }
                .post h3 { margin: 0 0 10px 0; }
                .post .date { color: #666; font-size: 0.9em; }
                .post .desc { margin-top: 10px; }
                a { color: #5086C7; text-decoration: none; }
                a:hover { text-decoration: underline; }
                .warning { background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 5px; }
                .success { background: #d4edda; border: 1px solid #28a745; padding: 15px; margin: 20px 0; border-radius: 5px; }
            </style>
        </head>
        <body>
            <h1>🚀 Website Preview - Local Changes</h1>

            <div class="warning">
                ⚠️ <strong>Note:</strong> This is a simplified preview. Jekyll styling won't appear until you publish.
                The content below shows your NEW blog posts and ENHANCED case studies.
            </div>

            <h2>📝 New Blog Posts (March 12, 2026)</h2>
        """

        # List new blog posts
        posts_dir = Path("_posts")
        new_posts = sorted(posts_dir.glob("2026-03-12-*.md"), reverse=True)

        for post_path in new_posts:
            with open(post_path, 'r') as f:
                content = f.read()
                # Extract front matter
                if content.startswith('---'):
                    parts = content.split('---', 2)
                    if len(parts) >= 3:
                        front_matter = yaml.safe_load(parts[1])
                        title = front_matter.get('title', post_path.stem)
                        desc = front_matter.get('description', '')
                        date = front_matter.get('date', '2026-03-12')

                        html += f'''
                        <div class="post">
                            <h3><a href="/preview/post/{post_path.name}">{title}</a></h3>
                            <div class="date">Date: {date}</div>
                            <div class="desc">{desc}</div>
                        </div>
                        '''

        html += """
            <h2>📊 Enhanced Case Studies</h2>
            <ul>
        """

        # List case studies
        cases_dir = Path("_casestudies")
        for case_path in sorted(cases_dir.glob("*.md")):
            if not case_path.name.startswith('.'):
                case_name = case_path.stem.replace('_', ' ').title()
                html += f'<li><a href="/preview/case/{case_path.name}">{case_name}</a></li>'

        html += """
            </ul>

            <h2>✅ What's Been Enhanced</h2>
            <ul>
                <li><strong>R&D Portfolio Visibility</strong> - Corrected narrative (was "Time Tracking")</li>
                <li><strong>AI Analytics Assistant</strong> - Positioned as proactive strategy</li>
                <li><strong>All case studies</strong> - STAR format with 40-50% more content</li>
                <li><strong>About & Story pages</strong> - Philosophy and Oakland origins added</li>
                <li><strong>Dollar amounts</strong> - Specific throughout ($30B+, $200M+)</li>
            </ul>

            <div class="success">
                ✅ <strong>Ready to Publish!</strong> Run <code>./PUBLISH_WEBSITE.sh</code> to make these changes live.
            </div>
        </body>
        </html>
        """

        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(html.encode())

    def send_post_preview(self, post_name):
        """Preview a specific blog post"""
        post_path = Path("_posts") / post_name
        if post_path.exists():
            with open(post_path, 'r') as f:
                content = f.read()

            # Parse front matter and content
            if content.startswith('---'):
                parts = content.split('---', 2)
                if len(parts) >= 3:
                    front_matter = yaml.safe_load(parts[1])
                    markdown_content = parts[2]

                    # Convert markdown to HTML
                    html_content = markdown.markdown(markdown_content, extensions=['tables', 'fenced_code'])

                    title = front_matter.get('title', 'Post')

                    html = f"""
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>{title}</title>
                        <style>
                            body {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
                                   max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8; }}
                            h1 {{ color: #333; border-bottom: 2px solid #5086C7; padding-bottom: 10px; }}
                            h2 {{ color: #5086C7; margin-top: 40px; }}
                            h3 {{ color: #666; }}
                            pre {{ background: #f5f5f5; padding: 15px; overflow-x: auto; }}
                            code {{ background: #f5f5f5; padding: 2px 5px; }}
                            blockquote {{ border-left: 3px solid #5086C7; padding-left: 15px; color: #666; }}
                            a {{ color: #5086C7; }}
                            .back {{ margin-bottom: 30px; }}
                        </style>
                    </head>
                    <body>
                        <div class="back"><a href="/preview">← Back to Preview Index</a></div>
                        <h1>{title}</h1>
                        {html_content}
                    </body>
                    </html>
                    """

                    self.send_response(200)
                    self.send_header("Content-type", "text/html")
                    self.end_headers()
                    self.wfile.write(html.encode())
                    return

        self.send_error(404, "Post not found")

    def send_case_preview(self, case_name):
        """Preview a specific case study"""
        case_path = Path("_casestudies") / case_name
        if case_path.exists():
            with open(case_path, 'r') as f:
                content = f.read()

            # Parse front matter and content
            if content.startswith('---'):
                parts = content.split('---', 2)
                if len(parts) >= 3:
                    front_matter = yaml.safe_load(parts[1])
                    markdown_content = parts[2]

                    # Convert markdown to HTML
                    html_content = markdown.markdown(markdown_content, extensions=['tables', 'fenced_code'])

                    title = front_matter.get('title', 'Case Study')

                    html = f"""
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>{title}</title>
                        <style>
                            body {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
                                   max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.8; }}
                            h1 {{ color: #333; border-bottom: 2px solid #5086C7; padding-bottom: 10px; }}
                            h2 {{ color: #5086C7; margin-top: 40px; }}
                            h3 {{ color: #666; }}
                            pre {{ background: #f5f5f5; padding: 15px; overflow-x: auto; }}
                            code {{ background: #f5f5f5; padding: 2px 5px; }}
                            blockquote {{ border-left: 3px solid #5086C7; padding-left: 15px; color: #666; }}
                            a {{ color: #5086C7; }}
                            .back {{ margin-bottom: 30px; }}
                            .star-section {{ background: #f7f7f7; padding: 20px; margin: 20px 0; border-radius: 5px; }}
                        </style>
                    </head>
                    <body>
                        <div class="back"><a href="/preview">← Back to Preview Index</a></div>
                        <h1>{title}</h1>
                        {html_content}
                    </body>
                    </html>
                    """

                    self.send_response(200)
                    self.send_header("Content-type", "text/html")
                    self.end_headers()
                    self.wfile.write(html.encode())
                    return

        self.send_error(404, "Case study not found")

if __name__ == "__main__":
    print("\n🚀 Starting Website Preview Server")
    print("=" * 50)
    print(f"Preview available at: http://localhost:{PORT}/preview")
    print("Press Ctrl+C to stop the server")
    print("=" * 50)
    print("\nNOTE: This shows content only. Full Jekyll styling will appear after publishing.\n")

    with socketserver.TCPServer(("", PORT), PreviewHandler) as httpd:
        httpd.serve_forever()