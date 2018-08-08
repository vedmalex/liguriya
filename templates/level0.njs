<#@ alias 'level0' #>
# Артикуляция

<#- context.paired__consonants.forEach(c=> {#>
## #{c[0]} #{c[1]}

<# for(let i = 0; i < 5 ;i++){ -#>
#{c[0]} #{c[1]}! 
<#-}#>
<#context.vowels__all.forEach(v=>{-#>
#{c[0]}#{v[0]} 
<#-})#>
<#context.vowels__all.forEach(v=>{-#>
#{c[1]}#{v} 
<#-})#>
<#context.vowels__all.forEach(v=>{-#>
#{c[0]}#{v}#{c[0]} 
<#-})#>
<#context.vowels__all.forEach(v=>{-#>
#{c[1]}#{v}#{c[1]} 
<#-})#>

<#context.vowels__all.forEach(v=>{-#>
#{c[0]}#{v}#{c[1]}#{v} 
<#-})#>
<#context.vowels__all.forEach(v=>{-#>
#{c[1]}#{v}#{c[0]}#{v} 
<#-})#>

<#context.vowels__all.forEach(v=>{-#>
#{c[0]}#{v}-#{c[0]}#{v}-#{c[0]}#{v}-#{c[0]}#{v}-#{c[0]}#{v}#{c[1]}      #{c[1]}#{v}-#{c[1]}#{v}-#{c[1]}#{v}-#{c[1]}#{v}-#{c[1]}#{v}#{c[0]}#{c[0]}#{v}
<#})#>

<#-})#>