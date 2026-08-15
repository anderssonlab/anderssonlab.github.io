---
layout: page
title: Software & Tools
description: Open-source software developed by the Andersson Lab
permalink: /software/
nav: true
nav_order: 7
horizontal: false
---

The Andersson Lab develops open-source software for regulatory genomics, including tools for quantitative analysis of transcription initiation data, prediction of active regulatory elements and enhancer–gene interactions, and sequence-based modelling of regulatory activity.

---

<h3>PRIME toolkit</h3>
The <b>PRIME toolkit</b> consists of three interconnected tools for analysis of transcription initiation data from CAGE and related TSS assays. Together, they support workflows from raw sequencing reads through quantitative analysis of transcription initiation to genome-wide prediction of active regulatory elements.

<table class="table table-sm">
<thead>
<tr>
<th>Tool</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>PRIMEprep</b></td>
<td>Bash pipeline for processing raw sequencing data, including quality control, adapter trimming, read mapping, and generation of BigWig signal tracks.</td>
</tr>
<tr>
<td><b>PRIME</b></td>
<td>R package for quantitative analysis of transcription initiation data, including TSS quantification, normalization, transcription initiation complexity, background noise estimation, divergent transcription analysis, and core promoter architecture.</td>
</tr>
<tr>
<td><b>PRIMEmodel</b></td>
<td>R package and Python framework for genome-wide prediction and scoring of active regulatory elements from transcription initiation profiles.</td>
</tr>
</tbody>
</table>

PRIME works alongside <i>CAGEfightR</i> and uses standard Bioconductor genomic data structures. The PRIME package also provides an interface to the LightGBM regulatory element model distributed through PRIMEmodel.

<ul>
<li>Project website and documentation: <a href="https://anderssonlab.org/PRIME/">PRIME</a></li>
<li>GitHub: <a href="https://github.com/anderssonlab/PRIME">PRIME</a>, <a href="https://github.com/anderssonlab/PRIMEprep">PRIMEprep</a>, <a href="https://github.com/anderssonlab/PRIMEmodel">PRIMEmodel</a></li>
<li>Interactive regulatory element browser: <a href="https://anderssonlab.org/PRIMEatlas/">PRIME Atlas</a></li>
<li>Paper: Einarsson H, Navamajiti N, et al. <a href="https://doi.org/10.64898/2026.05.11.724207"><i>Mapping active cis-regulatory elements from transcription initiation events</i></a>. bioRxiv. 2026.</li>
</ul>

<hr>

<h3>scE2G</h3>
<b>scE2G</b> is a computational pipeline for predicting genome-wide enhancer–gene regulatory interactions from single-cell ATAC-seq or paired single-cell ATAC- and RNA-seq (multiome) data. scE2G integrates features derived from chromatin accessibility, genomic distance, gene expression, and other genomic information to generate cell-type-specific enhancer–gene predictions.

<ul>
<li>GitHub: <a href="https://github.com/EngreitzLab/scE2G">EngreitzLab/scE2G</a></li>
<li>Paper: Sheth MU, Qiu W-L, et al. <a href="https://doi.org/10.1038/s41588-026-02695-8"><i>Mapping enhancer–gene regulatory interactions from single-cell data</i></a>. Nature Genetics. 2026.</li>
</ul>

<hr>

<h3>DeepCompARE</h3>
<b>DeepCompARE</b> is a lightweight multitask convolutional neural network that predicts promoter activity, enhancer potential, and chromatin accessibility directly from DNA sequence. Combined with <i>in silico</i> binding-site ablation (ISA), it enables systematic analysis of transcription factor motif importance and cooperativity across regulatory elements.

<ul>
<li>GitHub: <a href="https://github.com/anderssonlab/DeepCompARE">anderssonlab/DeepCompARE</a></li>
<li>Paper: He X, et al. <a href="https://doi.org/10.1101/2025.06.19.660093"><i>Genome-wide rules of transcription factor cooperativity revealed through in silico binding site ablation</i></a>. bioRxiv. 2025.</li>
</ul>

<hr>

<h3>ChromTransfer</h3>
<b>ChromTransfer</b> is a transfer-learning method for predicting cell-type-specific chromatin accessibility from DNA sequence. It uses a pre-trained, cell-type-agnostic model of open chromatin regions as the basis for fine-tuning models for individual cell types, enabling accurate predictions even when limited training data are available.

<ul>
<li>GitHub: <a href="https://github.com/anderssonlab/ChromTransfer">anderssonlab/ChromTransfer</a></li>
<li>Paper: Salvatore M, Horlacher M, et al. <a href="https://doi.org/10.1093/nargab/lqad026"><i>Transfer learning identifies sequence determinants of cell-type specific regulatory element accessibility</i></a>. NAR Genomics and Bioinformatics. 2023.</li>
</ul>

<hr>

<h3>Transcriptional Decomposition</h3>
<b>Transcriptional Decomposition</b> is a computational approach for decomposing genome-wide RNA expression into positionally dependent and positionally independent components. The positionally dependent component captures transcriptional patterns associated with chromosomal organization and can be used to infer features of active chromatin architecture. The accompanying framework also uses transcriptional features to predict cell-type-specific enhancer–promoter interactions.

<ul>
<li>GitHub: <a href="https://github.com/anderssonlab/transcriptional_decomposition">anderssonlab/transcriptional_decomposition</a></li>
<li>Paper: Rennie S, Dalby M, van Duin L, Andersson R. <a href="https://doi.org/10.1038/s41467-017-02798-1"><i>Transcriptional decomposition reveals active chromatin architectures and cell specific regulatory interactions</i></a>. Nature Communications. 2018.</li>
</ul>