<#@ alias 'level1' #>
# ДИКЦИЯ

## Взрывные согласные

Произнесите без голоса глухие согласные, активно взрывая их:
<# context.voiceless__consonants.forEach(c=> {#>
#{c} #{c}Ь #{c} #{c}Ь #{c} #{c}Ь #{c} #{c}Ь #{c} #{c}Ь
<#-})#>

Данные согласные подготавливают правильное звучание  следующих за ними гласных. Т.к. согласные эти падают резко, как молот о наковальню. При этом они как бы выталкивают стоящие за ними звуки. Следующее упражнение для дикции произнесите с голосом:

<# context.voiceless__consonants.forEach(c=> {
  context.vowels__all.forEach(v=>{
-#>
#{c}#{v} 
<#-})#>
<#})#>

Далее включайте звонкие согласные: 

<# context.voiced__consonants.forEach(c=> {
  context.vowels__all.forEach(v=>{
-#>
#{c}#{v} 
<#-})#>
<#})#>


Следующее упражнение произнесите с голосом. Следите за активным произнесением конечных глухих согласных:


<# context.paired__consonants.forEach(c=> {
#>
## #{c[0]} #{c[1]}
<#-
  context.vowels__all.forEach(v=>{
#>
#{c[0]}#{v}-#{c[0]}#{v}-#{c[0]}#{v}-#{c[0]}#{v}-#{c[0]}#{v}#{c[1]}#{c[1]}#{v}!!!       #{c[1]}#{v}-#{c[1]}#{v}-#{c[1]}#{v}-#{c[1]}#{v}-#{c[1]}#{v}#{c[0]}#{c[0]}!!!
<#-})#>

<#-
  context.vowels__all.forEach(v=>{
#>
<#-})#>
<#})#>

 Для развития подвижности языка присоединим согласный звук Р к П:

<# context.paired__consonants.forEach(c=> {
#>
## #{c[0]} #{c[1]}

<#
  context.paired__vowels.forEach(v=>{
-#>
#{c[0]}Р#{v[0]}-#{c[0]}Р#{v[1]}  
<#-})#>
<#
  context.paired__vowels.forEach(v=>{
-#>
#{c[1]}Р#{v[0]}-#{c[1]}Р#{v[1]}  
<#-})#>
<#})#>
ТАДИТА
<# context.paired__consonants.forEach(c=> {
#>
## #{c[0]} #{c[1]}
<#
  context.paired__vowels.forEach(v=>{
-#>
 #{c[0]}А#{c[1]}#{c[0]}#{v[0]}-#{c[0]}А#{c[1]}#{c[0]}#{v[1]}
<#-})#>
<#
  context.paired__vowels.forEach(v=>{
-#>
 #{c[1]}А#{c[0]}#{c[1]}#{v[0]}-#{c[1]}А#{c[0]}#{c[1]}#{v[1]}
<#-})#>
<#})#>

ТЫТА
<# context.paired__consonants.forEach(c=> {
#>
## #{c[0]} #{c[1]}
<#
  context.paired__vowels.forEach(v=>{
-#>
 #{c[0]}Ы#{c[0]}#{v[0]}-#{c[0]}Ы#{c[0]}#{v[1]}
<#-})#>
<#
  context.paired__vowels.forEach(v=>{
-#>
 #{c[1]}Ы#{c[1]}#{v[0]}-#{c[1]}Ы#{c[1]}#{v[1]}
<#-})#>
<#})#>

Затем тренируйте такие сочетания звуков: 

<#
  context.paired__vowels.forEach(v=>{
-#>
 РЛ#{v[0]}-РЛ#{v[1]} 
<#-})#>

<#
  context.paired__vowels.forEach(v=>{
-#>
 МФ#{v[0]}-МФ#{v[1]}
<#-})#>

<# context.paired__consonants.forEach(c=> {
#>
## #{c[0]} #{c[1]}
<#
  context.paired__vowels.forEach(v=>{
-#>
 Д#{c[0]}#{v[0]}-Д#{c[0]}#{v[1]}
<#-})#>
<#
  context.paired__vowels.forEach(v=>{
-#>
 Д#{c[1]}#{v[0]}-Д#{c[1]}#{v[1]}
<#-})#>
<#})#>

<# context.paired__consonants.forEach(c=> {
#>
## #{c[0]} #{c[1]}
<#
  context.paired__vowels.forEach(v=>{
-#>
 Д#{c[0]}Д#{c[0]}#{v[0]}-Д#{c[0]}Д#{c[0]}#{v[1]}
<#-})#>
<#
  context.paired__vowels.forEach(v=>{
-#>
 Д#{c[1]}Д#{c[1]}#{v[0]}-Д#{c[1]}Д#{c[1]}#{v[1]}
<#-})#>
<#})#>