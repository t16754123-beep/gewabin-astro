import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const escapeXml=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
async function htmlFiles(directory){
 const entries=await readdir(directory,{withFileTypes:true});
 return (await Promise.all(entries.map(entry=>entry.isDirectory()?htmlFiles(path.join(directory,entry.name)):entry.name.endsWith('.html')?[path.join(directory,entry.name)]:[]))).flat();
}
export default function searchDiscovery(){
 let site;
 return {name:'gewabin-search-discovery',hooks:{
  'astro:config:done':({config})=>{site=config.site;if(!site)throw new Error('Set the public site URL before generating discovery files.');},
  'astro:build:done':async({dir,logger})=>{
   const output=fileURLToPath(dir),urls=[];
   for(const file of await htmlFiles(output)){
    const html=await readFile(file,'utf8');
    const relative=path.relative(output,file).split(path.sep).join('/');
    if(relative==='404.html'||/<meta\b(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*\bnoindex\b)[^>]*>/i.test(html))continue;
    const pathname='/'+relative.replace(/index\.html$/,'');
    urls.push(new URL(pathname,site).href);
   }
   urls.sort();
   await writeFile(path.join(output,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(url=>'  <url><loc>'+escapeXml(url)+'</loc></url>').join('\n')+'\n</urlset>\n');
   await writeFile(path.join(output,'robots.txt'),'User-agent: *\nAllow: /\n\nSitemap: '+new URL('/sitemap.xml',site).href+'\n');
   logger.info('Generated sitemap.xml with '+urls.length+' indexable pages and robots.txt.');
  }
 }};
}
