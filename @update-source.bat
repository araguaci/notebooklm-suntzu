@REM ------- BEGIN xpi.bat ----------------
@REM m0 Store/Add files to archive without compression
@REM -m1 Fastest � Fastest method (least compressive)
@REM -m2 Fast � Fast compression method
@REM -m3 Normal � default compression method
@REM -m4 Good � Good compression method (more compressive)
@REM -m5 Best � Best compression method (most compressive but also most slow) 
@REM -ED - do not add empty folders
@REM Switch -TA<date> - process files modified after the specified date
@REM Switch -TB<date> - process files modified before the specified date

@REM http://acritum.com/software/manuals/winrar/
@REM #exe#5.41  
@REM 83 -AFzip -TA201603060000000  

SET var=401
SET sis=source

@setlocal 
@echo off  
set path="C:\Program Files (x86)\WinRAR";%path% 
@rem -agYYYYMMDDHHMM                                  
"C:\Program Files\WinRAR\WinRAR.exe" a -agupdate."%var%" -ED -AFzip -TA20260107000000 -x*.txt -x*\.git -x*\node_modules -x*\.next -x*\sac -x*\_atualiza -x*\cadastro -x*\docs -x*\_admin -x*\log -x*\UPDATE-PACKAGES -x*\.svn -x*\@desenv@ -x*\uploads  -x*\.idea -x*\wrk -x*\work -x*\attender -x*\nbproject -xatt_config.php -x*.ZIP -x*.RAR -x*.ATT -x*.BAK -x*.BAT -x*.MP3 -x*.project -xpowerdialing.txt -xperdas.txt -xatt_database.cfg -r "%sis%"- * 

@rem "C:\Program Files\WinRAR\WinRAR.exe" a -agV3."%var%" -AFzip CTIA- att_licenca.php atualiza.php atualizarbanco.php atualizarlicenca.php atualizarversao.php directi.php ewshared9.php footer.php home_cliente.php home_cti_agentes.php home_cti_logoff.php index.php info.php licenca.php login.php phpfn9.php userfn9.php

REM ------- END xpi.bat ------------------  