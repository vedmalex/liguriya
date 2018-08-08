result = Line 116: Unexpected token );
(function(){
  return { alias: ["level0"],  script: function (context, _content, partial, slot){
     function content(blockName, ctx) {
       if(ctx === undefined || ctx === null) ctx = context;
       return _content(blockName, ctx, content, partial, slot);
     }
     
     var out = '';    function applyIndent(_str, _indent) {
       var str = String(_str);
       var indent = '';
       if (typeof _indent == 'number' && _indent > 0) {
         var res = '';
         for (var i = 0; i < _indent; i++) {
           res += ' ';
         }
         indent = res;
       }
       if (typeof _indent == 'string' && _indent.length > 0) {
         indent = _indent;
       }
       if (indent && str) {
         return str.split('\n').map(function (s) {
             return indent + s;
         }).join('\n');
       } else {
         return str;
       }
     }
     
     /*2:1*/
       context.paired__consonants.forEach(c=> {
     /*2:47*/
      out +="\n##";
     /*3:3*/
      out +=applyIndent(c[0], " ");
     /*3:11*/
      out +=applyIndent(c[1], " ");
     /*3:19*/
      out +="\n\n";
     /*5:1*/
       for(let i = 0; i < 5 ;i++){ 
     /*6:1*/
      out +=c[0];
     
     /*6:8*/
      out +=applyIndent(c[1], " ");
     /*6:16*/
      out +="! ";
     /*6:18*/
      }
     /*7:7*/
      out +="\n\n";
     /*9:1*/
      context.vowels__all.forEach(v=>{
     /*10:1*/
      out +=c[0];
     
     /*10:8*/
      out +=v[0];
     
     /*10:15*/
      out +=" ";
     /*10:16*/
      })
     /*11:8*/
      out +="\n";
     /*12:1*/
      context.vowels__all.forEach(v=>{
     /*13:1*/
      out +=c[1];
     
     /*13:8*/
      out +=v;
     
     /*13:12*/
      out +=" ";
     /*13:13*/
      })
     /*14:8*/
      })
     /*15:8*/
      out +="\n\n";
     /*17:1*/
      context.vowels__all.forEach(v=>{
     /*18:1*/
      out +=c[0];
     
     /*18:8*/
      out +=v[0];
     
     /*18:15*/
      out +=c[0];
     
     /*18:22*/
      out +=" ";
     /*18:23*/
      })
     /*19:8*/
      out +="\n";
     /*20:1*/
      context.vowels__all.forEach(v=>{
     /*21:1*/
      out +=c[1];
     
     /*21:8*/
      out +=v;
     
     /*21:12*/
      out +=c[1];
     
     /*21:19*/
      out +=" ";
     /*21:20*/
      })
     /*22:8*/
      })
     
       return out;
   },
   compile: function() {
     this.alias = ["level0"];  },
   dependency: {
     }
 }
 ;
})();;