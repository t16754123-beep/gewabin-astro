import {categories,products,stories} from './content';
import {applications,services,companyPages,guides,partGroups,videos} from './extended';
export const categoryPaths:Record<string,string>={condensers:'evaporative-condensers',towers:'closed-circuit-cooling-towers',parts:'heat-exchanger-parts'};
export type Entry={title:string;description:string;href:string;image?:string;type?:string};
export type SitePage={path:string;title:string;description:string;eyebrow:string;parent?:{title:string;href:string};image?:string;sections?:{heading:string;text:string;points?:string[]}[];entries?:Entry[];productSlugs?:string[];source?:string;kind?:string;category?:string};
export const expansionPages:SitePage[]=[
 ...categories.map(c=>({path:'products/categories/'+categoryPaths[c.id],title:c.name,description:c.text,eyebrow:'GEWABIN PRODUCTS',parent:{title:'Products',href:'/products/'},image:c.image,kind:'category',category:c.id,productSlugs:products.filter(p=>p.category===c.id).map(p=>p.slug)})),
 {path:'parts',title:'Cooling Equipment Parts',description:'Explore condenser coils, cooling tower fill and drift eliminators.',eyebrow:'PARTS & COMPONENTS',entries:partGroups.map(x=>({...x,href:'/parts/'+x.slug+'/'})),kind:'hub'},
 ...partGroups.map(x=>({path:'parts/'+x.slug,title:x.title,description:x.description,eyebrow:'PARTS & COMPONENTS',parent:{title:'Parts',href:'/parts/'},image:x.image,sections:[{heading:'Match the component to your equipment',text:'Send the existing equipment details to Gewabin so the team can discuss the appropriate component.',points:x.points}],productSlugs:[x.productSlug],kind:'reading'})),
 {path:'applications',title:'Cooling Applications',description:'Explore cooling equipment by application and prepare the information needed for a technical discussion.',eyebrow:'APPLICATIONS',entries:applications.map(x=>({...x,href:'/applications/'+x.slug+'/'})),kind:'hub'},
 ...applications.map(x=>({...x,path:'applications/'+x.slug,eyebrow:'APPLICATIONS',parent:{title:'Applications',href:'/applications/'},kind:'reading'})),
 {path:'services',title:'Technical Support & Services',description:'From the first equipment discussion to customization and installation support.',eyebrow:'GEWABIN SERVICES',entries:services.map(x=>({...x,href:'/services/'+x.slug+'/'})),kind:'hub'},
 ...services.map(x=>({...x,path:'services/'+x.slug,eyebrow:'GEWABIN SERVICES',parent:{title:'Services',href:'/services/'},kind:'reading'})),
 ...companyPages.map(x=>({...x,path:'about/'+x.slug,eyebrow:'ABOUT GEWABIN',parent:{title:'About Us',href:'/about/'},kind:'reading'})),
 ...guides.map(x=>({...x,path:'library/guides/'+x.slug,eyebrow:'TECHNICAL READING',parent:{title:'Resource Library',href:'/library/'},kind:'reading'})),
 {path:'tools',title:'Tools for Your First Inquiry',description:'Find a product family and prepare a clear project brief for Gewabin.',eyebrow:'PROJECT TOOLS',entries:[{title:'Product Family Selector',description:'Compare refrigerant condensing, process-fluid cooling and component requirements.',href:'/tools/product-selector/',image:'counter-flow.jpg'},{title:'Technical Resource Library',description:'Read product information and learn how equipment and components work.',href:'/library/',image:'production.jpg'},{title:'Project Inquiry',description:'Send your application details, operating conditions and installation requirements.',href:'/contact/',image:'factory.jpg'}],kind:'hub'},
];
export const navigation=[
 {title:'Products',href:'/products/',links:categories.map(c=>({title:c.name,href:'/products/categories/'+categoryPaths[c.id]+'/'}))},
 {title:'Parts',href:'/parts/',links:partGroups.map(p=>({title:p.title,href:'/parts/'+p.slug+'/'}))},
 {title:'Library',href:'/library/',links:[...guides.map(g=>({title:g.title,href:'/library/guides/'+g.slug+'/'})),{title:'Video Library',href:'/library/videos/'}]},
 {title:'About',href:'/about/',links:companyPages.map(p=>({title:p.title,href:'/about/'+p.slug+'/'}))},
 {title:'Applications',href:'/applications/',links:applications.map(p=>({title:p.title,href:'/applications/'+p.slug+'/'}))},
 {title:'Services',href:'/services/',links:services.map(p=>({title:p.title,href:'/services/'+p.slug+'/'}))},
 {title:'Tools',href:'/tools/',links:[{title:'Product Family Selector',href:'/tools/product-selector/'},{title:'Project Inquiry',href:'/contact/'}]},
 {title:'News',href:'/news/',links:stories.map(p=>({title:p.title,href:'/news/'+p.slug+'/'}))},
];
export const resources:Entry[]=[
 ...guides.map(g=>({title:g.title,description:g.description,href:'/library/guides/'+g.slug+'/',image:g.image,type:'Guide'})),
 ...products.map(p=>({title:p.name,description:p.description,href:'/products/'+p.slug+'/',image:p.image,type:'Product'})),
 ...videos.map(v=>({title:v.title,description:v.description,href:'/library/videos/#video-'+v.id,image:v.image,type:'Video'})),
];
export const searchEntries:Entry[]=[
 {title:'Home',description:'Gewabin evaporative cooling equipment',href:'/'},
 {title:'About Gewabin',description:'Company profile and manufacturing base',href:'/about/'},
 {title:'Product Catalog',description:'All cooling equipment and components',href:'/products/'},
 {title:'Contact Gewabin',description:'Product inquiries, phone, email and location',href:'/contact/'},
 ...expansionPages.map(p=>({title:p.title,description:p.description,href:'/'+p.path+'/',image:p.image,type:p.eyebrow})),
 ...products.map(p=>({title:p.name,description:p.description,href:'/products/'+p.slug+'/',type:'PRODUCT'})),
 ...stories.map(s=>({title:s.title,description:s.text,href:'/news/'+s.slug+'/',type:'NEWS'})),
 {title:'Resource Library',description:'Technical reading, products and videos',href:'/library/'},
 {title:'Video Library',description:'Gewabin factory and application videos',href:'/library/videos/'},
 {title:'Product Family Selector',description:'Prepare an equipment inquiry',href:'/tools/product-selector/'},
 {title:'News & Projects',description:'Gewabin project stories',href:'/news/'},
];
